import React from 'react';
import * as S from './style';

import { Summary, Transactions } from '../../components';

export const Overview: React.FC = () => {
  return (
    <S.Overview>
      <Summary />
      <Transactions />
    </S.Overview>
  );
}