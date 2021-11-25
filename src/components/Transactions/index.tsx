import React from 'react';

import * as S from './style';

import { useTransactions } from '../../hooks/useTransactions';

export const Transactions: React.FC = () => {
  const { transactions } = useTransactions();

  return (
    <S.Transactions>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {
            transactions?.map(transaction => (
              <tr key={transaction.id}>
                <td>{transaction.title}</td>
                <td className={`is-${transaction.type}`}>
                  { 
                    new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL',
                    }).format(transaction.amount) 
                  }
                </td>
                <td>{transaction.category}</td>
                <td>
                  { 
                    new Intl.DateTimeFormat('pt-BR')
                      .format(new Date(transaction.createdAt)) 
                  }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </S.Transactions>
  )
}
