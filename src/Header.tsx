import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import styled from 'styled-components/macro';
import { EngineeringContext } from './EngineeringContext';
import logo from './img/logo.png';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { ListItem } from '@material-ui/core';

const ListWrapper = styled.div`
  width: 200px;
  margin: 20px;
  font-size: 20px;
`;

const StyledAppBar = styled(AppBar)`
  && {
    background: black;
    padding-top: 20px;
    padding-bottom: 2.5rem;
  }
`;

const StyledIconButton = styled(IconButton)`
  && {
    @media screen and (min-width: 600px) {
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
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const StyledDrawer = styled(Drawer)`
  background: #161616;
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
          <StyledIconButton
            onClick={toggleDrawer(true)}
            edge='start'
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon fontSize='large' />
          </StyledIconButton>
          <img height={30} src={logo} alt='Logo' />
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
      <StyledDrawer anchor={'left'} open={open} onClose={toggleDrawer(false)}>
        <ListWrapper
          role='presentation'
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <IconButton
            onClick={toggleDrawer(false)}
            edge='end'
            color='inherit'
            aria-label='clear'
          >
            <ClearIcon fontSize='large' />
          </IconButton>
          <List>
            {titleData.map((titleOption: any) => (
              <ListItem
                key={titleOption.name}
                button
                component={Link}
                to={titleOption.url}
                onClick={() => handleClick(titleOption.name)}
              >
                {titleOption.name}
              </ListItem>
            ))}
          </List>
        </ListWrapper>
      </StyledDrawer>
    </>
  );
}
