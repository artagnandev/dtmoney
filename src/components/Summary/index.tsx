import React from 'react';

import * as S from './style';

import totalImg from '../../assets/total.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { useTransactions } from '../../hooks/useTransactions';

export const Summary: React.FC = () => {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    
    if ( transaction.type === 'deposit' ) {
      acc.deposits += transaction.amount;
      acc.total += transaction.amount;
    }

    else {
      acc.withdrawals += transaction.amount;
      acc.total -= transaction.amount;
    }
  
    return acc;
  }, {
    deposits: 0,
    withdrawals: 0,
    total: 0,
  })

  return (
    <S.Summary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <span>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.deposits) 
          }
        </span>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Saídas" />
        </header>
        <span>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.withdrawals) 
          }
        </span>
      </div>

      <div>
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total" />
        </header>
        <span>
          { 
            new Intl.NumberFormat('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            }).format(summary.total) 
          }
        </span>
      </div>
    </S.Summary>
  );
}