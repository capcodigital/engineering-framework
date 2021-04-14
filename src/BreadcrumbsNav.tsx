import React, { FC, useContext } from 'react';
import { EngineeringContext } from './EngineeringContext';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import styled from 'styled-components/macro';

type BreadcrumbsNavProps = {
  open: boolean;
  onClick: any
};

const Wrapper = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  background: #161616;
  .breadcrumbs-wrapper {
    padding: 8px 24px 8px 24px;
    .title {
      text-align: left;
    }
  }

  ol {
    display: contents;
    li {
      color: grey;
      margin: 0;
      :last-child {
        color: white;
      }
    }
  }
  nav.MuiBreadcrumbs-root {
    display: -webkit-inline-box;
    width: calc(100% - 30px);
    overflow-x: hidden;
  }
  .MuiSvgIcon-root {
    float: right;
  }
  .MuiCollapse-container {
    background: black;
  }

  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const BreadcrumbsNav: FC<BreadcrumbsNavProps> = ({
  children,
  open,
  onClick,
}) => {
  const { level, category, competency } = useContext(EngineeringContext);

  return (
    <Wrapper onClick={onClick}>
      <div className='breadcrumbs-wrapper'>
        <div className='title'>Digital Engineering</div>
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize='small' />}
          aria-label='breadcrumb'
        >
          <div>{level}</div>
          <div>{category}</div>
          <div>{competency}</div>
        </Breadcrumbs>
        {open ? <ExpandLess /> : <ExpandMore />}
      </div>
      {children}
    </Wrapper>
  );
};

export default BreadcrumbsNav;
