import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { EngineeringContext } from './EngineeringContext';
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  Toolbar,
} from '@material-ui/core/';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import logo from './img/logo.png';
import styled from 'styled-components/macro';

const StyledAppBar = styled(AppBar)`
  && {
    background: black;
    padding-top: 24px;
    padding-bottom: 2.5rem;
    @media screen and (max-width: 1000px) {
      padding-top: 16px;
      padding-bottom: 16px;
      position: relative;
      z-index: 1400;
      img {
        margin-right: auto;
        margin-left: auto;
      }
    }
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
`;

const StyledLink = styled(Link)`
  font-size: 16px;
  font-weight: bold;
  position: relative;
  text-decoration: none;
  color: grey;
  margin-left: 2rem;
  &.active {
    color: white;
  }
  :hover {
    color: lightgrey;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  && {
    div.MuiPaper-root {
      width: 292px;
      background: #161616;
      font-size: 16px;
      font-weight: bold;
      color: grey;
      .active {
        color: white;
      }
      button {
        color: white;
      }
      ul {
        padding-top: 110px;
        padding-left: 16px;
      }
      a {
        padding-bottom: 24px;
      }
    }
  }
`;

const titleData = [
  { name: 'Software Engineer', url: '/software' },
  { name: 'Quality Engineer', url: '/quality' },
];

export default function Header() {
  const { specialism, category, competency, setSpecialism } = useContext(
    EngineeringContext
  );
  const [open, setOpen] = useState(false);

  const handleClick = (activeTitle: string) => {
    setSpecialism(activeTitle);
  };

  const toggleDrawer = (open: boolean) => (event: any) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }
    setOpen(open);
  };

  return (
    <>
      <StyledAppBar position='sticky'>
        <Toolbar>
          {open ? (
            <IconButton
              onClick={toggleDrawer(false)}
              edge='end'
              color='inherit'
              aria-label='clear'
            >
              <ClearIcon fontSize='large' />
            </IconButton>
          ) : (
            <StyledIconButton
              onClick={toggleDrawer(true)}
              edge='start'
              color='inherit'
              aria-label='menu'
            >
              <MenuIcon fontSize='large' />
            </StyledIconButton>
          )}

          <img height={32} src={logo} alt='Logo' />
          {titleData.map((titleOption: any) =>
            titleOption.name === specialism ? (
              <StyledLink
                key={titleOption.name}
                to={`${titleOption.url}/#${category}-${competency.replaceAll(
                  ' ',
                  '-'
                )}`.toLowerCase()}
                className={'active'}
                onClick={() => handleClick(titleOption.name)}
              >
                {titleOption.name}
              </StyledLink>
            ) : (
              <StyledLink
                key={titleOption.name}
                to={`${titleOption.url}/#${category}-${competency.replaceAll(
                  ' ',
                  '-'
                )}`.toLowerCase()}
                onClick={() => handleClick(titleOption.name)}
              >
                {titleOption.name}
              </StyledLink>
            )
          )}
        </Toolbar>
      </StyledAppBar>
      <StyledDrawer
        anchor={'left'}
        open={open}
        onClose={toggleDrawer(false)}
        ModalProps={{
          BackdropProps: {
            invisible: true,
          },
        }}
      >
        <List
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          {titleData.map((titleOption: any) =>
            titleOption.name === specialism ? (
              <ListItem
                key={titleOption.name}
                button
                component={Link}
                to={titleOption.url}
                className={'active'}
                onClick={() => handleClick(titleOption.name)}
              >
                {titleOption.name}
              </ListItem>
            ) : (
              <ListItem
                key={titleOption.name}
                button
                component={Link}
                to={titleOption.url}
                onClick={() => handleClick(titleOption.name)}
              >
                {titleOption.name}
              </ListItem>
            )
          )}
        </List>
      </StyledDrawer>
    </>
  );
}
