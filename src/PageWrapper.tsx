import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  background-color: black;
  width: 100vw;
  min-height: 100vh;
  height: 100%;
  text-align: center;
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
