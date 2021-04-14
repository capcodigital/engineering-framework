import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  max-width: 100rem;
  margin-right: auto;
  margin-left: auto;
  background-color: black;
  display: block;
  height: 100vh;
  padding: 0px 40px 0px 40px;
  text-align: center;
  overflow-x: hidden;
  @media screen and (max-width: 1000px) {
    padding: 0;
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
