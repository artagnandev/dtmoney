import styled from 'styled-components';

import { darken, rgba } from 'polished';

export const Form = styled.form`
  .title {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }

  .input {
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border: solid 1px #d7d7d7;
    border-radius: 0.25rem;
    background-color: #e7e9ee;
    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body)
    }

    & + .input {
      margin-top: 1rem;
    }
  }

  .button[type="submit"] {
    width: 100%;
    padding: 1 1.5rem;
    height: 4rem;
    background-color: var(--green);
    color: white;
    border-radius: 0.25rem;
    border: 0;
    font-size: 1rem;
    margin-top: 1.5rem;
    transition: ease .3s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.9);
    }


  }

  .type-options {
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
  }
`

interface RadioBtnProps {
  isActive: boolean,
  activeColor: 'green' | 'red'
};

const colors = {
  green: rgba('#12A454', 0.2),
  red: rgba('#E52E4D', 0.2)
}

export const RadioBtn = styled.button<RadioBtnProps>`
  height: 4rem;
  border: solid 1px #d7d7d7;
  border-radius: 0.25rem;
  background-color: ${({ isActive, activeColor }) => (
    isActive 
      ? colors[activeColor] 
      : 'transparent'
  )};

  display: flex;
  justify-content: center;
  align-items: center;
  transition: ease .3s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  &.is-selected {
    
  }

  img {
    width: 20px;
    height: 20px;
  }

  span {
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
`
