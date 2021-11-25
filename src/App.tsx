import { useState } from 'react'

import { GlobalStyle } from './styles/globals';
import Modal from 'react-modal';

import { TransactionsProvider } from './hooks/useTransactions';

import { Header, Overview, NewTransactionModal } from './components';

Modal.setAppElement('#root');

export const App = () => {
  const [modal, setModal] = useState(false);

  const openModal = () => setModal(true);

  const closeModal = () => setModal(false);

  return (
    <TransactionsProvider>
      <GlobalStyle />

      <Header setOpenModal={openModal} />

      <NewTransactionModal isOpen={modal} onRequestClose={closeModal} />

      <Overview />
    </TransactionsProvider>
  );
}
