import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  background-repeat: no-repeat;
  background-color: black;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  text-align: center;
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
