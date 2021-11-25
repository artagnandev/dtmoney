import styled from "styled-components";

export const Summary = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -10rem;

  div {
    background-color: white;
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    span {
      display: block;
      margin-top: 1rem;
      font-size: 2rem;
      font-weight: 500;
      line-height: 3rem;
    }

    &:nth-child(3) {
      color: white;
      background-color: var(--green);
    }
  }
`