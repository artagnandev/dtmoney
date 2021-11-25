import { FormEvent, useState } from 'react';

import * as S from './style';

import Modal from 'react-modal';

import { useTransactions } from '../../hooks/useTransactions';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

interface ModalProps {
  isOpen: boolean,
  onRequestClose: () => void,
}

export const NewTransactionModal: React.FC<ModalProps> = ({ isOpen, onRequestClose }) => {
  const { createTransaction } = useTransactions();
  
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  const createNewTransation = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({
      title,
      amount,
      category,
      type,
    });

    setTitle('');
    setAmount(0);
    setCategory('');
    setType('deposit');
    
    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Cadastrar transação"
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Form onSubmit={createNewTransation}>
        <h2 className="title">Cadastrar transação</h2>

        <input 
          type="text"
          value={title} 
          className="input" 
          placeholder="Titulo"
          onChange={e => setTitle(e.target.value)}
        />

        <input 
          type="number"
          value={amount} 
          className="input" 
          placeholder="Valor"
          onChange={e => setAmount(Number(e.target.value))}
        />

        <div className="type-options">

          <S.RadioBtn 
            type="button" 
            activeColor="green"
            isActive={type === 'deposit'}
            onClick={() => setType('deposit')} 
          > 
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBtn>

          <S.RadioBtn 
            type="button" 
            activeColor="red"
            isActive={type === 'withdrawal'}
            onClick={() => setType('withdrawal')} 
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </S.RadioBtn>

        </div>

        <input 
          type="text"
          value={category}
          className="input" 
          placeholder="Categoria"
          onChange={e => setCategory(e.target.value)}
        />

        <button className="button" type="submit">Cadastrar</button>
      </S.Form>
    </Modal>
  );
}
