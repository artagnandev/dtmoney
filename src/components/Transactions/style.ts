import styled from 'styled-components';

export const Transactions = styled.div`
  margin-top: 4rem;

  table {
    width: 100%;
    border-spacing: 0 0.5rem;
    border-collapse: separate;

    thead {
      th {
        color: var(--text-body);
        font-weight: 400;
        padding: 1rem 2rem;
        text-align: left;
        line-height: 1.5rem;
      }
    }

    tbody {
      td {
        padding: 1rem 2rem;
        border: 0;
        background-color: white;
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child {
          color: var(--text-title)
        }

        &.is-deposit {
          color: var(--green);
        }

        &.is-withdrawal {
          color: var(--red)
        }
      }
    }
  }
`