import * as S from './style';

import logoImg from '../../assets/logo.svg';

interface HeaderProps {
  setOpenModal: () => void,
}

export const Header: React.FC<HeaderProps> = ({ setOpenModal }) => {
  return (
    <S.Header>
      <S.Container>
        <img src={logoImg} alt="dt money" />
        <button type="button" onClick={setOpenModal}>
          Nova transação
        </button>
      </S.Container>
    </S.Header>
  );
}
