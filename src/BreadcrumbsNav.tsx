import React, { useContext, useEffect, useState } from 'react';
import { EngineeringContext } from './EngineeringContext';
import { Collapse } from '@material-ui/core';
import styled from 'styled-components/macro';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import SideBarList from './SideBarList';

const Wrapper = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  background: #161616;
  .breadcrumbs-wrapper {
    padding: 8px 28px 8px 28px;
    .title {
      text-align: left;
    }
  }
  && ol > li {
    color: grey;
    margin: 0;
    :last-child {
      color: white;
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

  display: none;
  @media only screen and (max-width: 1000px) {
    display: block;
  }
`;

const BreadcrumbsNav = () => {
  const [open, setOpen] = useState(false);
  const { level, category, competency, setCategory } = useContext(
    EngineeringContext
  );

  useEffect(() => {
    if (window.location.hash) {
      const temp = window.location.hash.split('#')[1].split('-')[0];
      const categoryfromUrl = temp.charAt(0).toUpperCase() + temp.slice(1);
      setCategory(categoryfromUrl);
    }
  }, [setCategory]);

  useEffect(() => {
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 100);
  }, []);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Wrapper>
      <div className='breadcrumbs-wrapper' onClick={() => handleClickOpen()}>
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
      <Collapse in={open} timeout='auto' unmountOnExit>
        <SideBarList onClick={() => handleClickOpen()} />
      </Collapse>
    </Wrapper>
  );
};

export default BreadcrumbsNav;
