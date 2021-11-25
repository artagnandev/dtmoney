import styled from 'styled-components';

import Modal from 'react-modal';

export const ModalStyled = styled(Modal)`
  width: 580px;
  height: 590px;
  position: absolute;
  top: 50%;
  left: 50%;
  right: auto;
  bottom: auto;
  margin-right: -50%;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  background-color: var(--background);
  padding: 64px 48px;

  .title {
    color: var(--text-title)
  }
`

export const Header = styled.header`
  background-color: var(--blue);
`

export const Container = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    font-size: 1rem;
    color: #FFF;
    border: 0;
    padding: 0 2rem;
    border-radius: 0.25rem;
    height: 3rem;
    background-color: var(--blue-light);
    transition: ease .3s;

    &:hover {
      filter: brightness(0.9)
    }
  }
`