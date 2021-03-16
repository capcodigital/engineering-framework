import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';
import ClearIcon from '@material-ui/icons/Clear';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import styled from 'styled-components/macro';
import EngineeringContext from './EngineeringContext';
import logo from './logo.png';
import { ListItem } from '@material-ui/core';
const useStyles = makeStyles((theme: any) => ({
  appBar: {
    background: 'black',
    paddingTop: 20,
  },
  list: {
    width: 250,
    margin: 20,
    fontSize: 20,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    right: 0,
    float: 'right',
    fontSize: 'large',
  },
  title: {
    fontSize: 45,
  },
}));

export default function Header() {
  const classes = useStyles();
  const { name, setName } = useContext(EngineeringContext);
  const [open, setOpen] = useState(false);

  const handleClick = (engRole: string) => {
    setName(engRole);
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

  const list = () => (
    <div
      className={classes.list}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <IconButton
        onClick={toggleDrawer(false)}
        edge='start'
        className={classes.menuButton}
        color='inherit'
        aria-label='clear'
      >
        <ClearIcon fontSize='large' />
      </IconButton>
      <List>
        <ListItem
          button
          component={Link}
          to='/'
          onClick={() => handleClick('')}
        >
          Home
        </ListItem>
        <ListItem>Software Engineering</ListItem>
        <ListItem>Quality Engineering</ListItem>
      </List>
    </div>
  );

  return (
    <>
      <AppBar className={classes.appBar} position='static'>
        <Toolbar>
          <Grid justify='space-between' container>
            <Grid item>
              {name != '' ? (
                <IconButton
                  onClick={() => handleClick('')}
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                  href='/'
                >
                  <NavigateBeforeIcon fontSize='large' />
                </IconButton>
              ) : (
                <img
                  height={40}
                  src={logo}
                  alt='Logo'
                  style={{ margin: '1rem' }}
                />
              )}
            </Grid>
            {name == 'software' && (
              <Grid item className={classes.title}>
                SOFTWARE ENGINEERING
              </Grid>
            )}
            {name == 'quality' && (
              <Grid item className={classes.title}>
                QUALITY ENGINEERING
              </Grid>
            )}

            <Grid item>
              <div>
                <IconButton
                  onClick={toggleDrawer(true)}
                  edge='start'
                  className={classes.menuButton}
                  color='inherit'
                  aria-label='menu'
                >
                  <MenuIcon fontSize='large' />
                </IconButton>
              </div>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Drawer anchor={'right'} open={open} onClose={toggleDrawer(false)}>
        {list()}
      </Drawer>
    </>
  );
}
