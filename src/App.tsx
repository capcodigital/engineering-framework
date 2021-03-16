import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components/macro';
import EngineeringContext from './EngineeringContext';
import FrameworkPage from './FrameworkPage';
import Home from './Home';
import Header from './Header';
import PageWrapper from './PageWrapper';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  const [name, setName] = useState('');
  const value = { name, setName };
  return (
    <PageWrapper>
    <CssBaseline />
    <Router>
      <Switch>
        <EngineeringContext.Provider value={value}>
          <Header/>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route exact path={'/framework'}>
            <FrameworkPage />
          </Route>
        </EngineeringContext.Provider>
      </Switch>
    </Router>
  </PageWrapper>
  );
}

export default App;
