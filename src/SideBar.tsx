import React, { FC } from 'react';
import styled from 'styled-components/macro';

const StyledSideBar = styled.div`
  min-width: 300px;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SideBar: FC = ({ children }) => {
  return <StyledSideBar data-testid='sidebar'>{children}</StyledSideBar>;
};

export default SideBar;
