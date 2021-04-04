import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledPageWrapper = styled.div`
  background-color: black;
  display: block;
  height: 100%;
  padding: 0px 40px 0px 40px;
  text-align: center;
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const PageWrapper: FC = ({ children }) => {
  return <StyledPageWrapper>{children}</StyledPageWrapper>;
};

export default PageWrapper;
