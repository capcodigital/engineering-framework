import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';
import Content from './Content';
import Header from './Header';
import PageWrapper from './PageWrapper';
import CssBaseline from '@material-ui/core/CssBaseline';

function App() {
  return (
    <PageWrapper>
      <CssBaseline />
      <Router>
        <Switch>
          <EngineeringContextProvider>
            <Header />
            <Route exact path='/' render={() => <Redirect to='/software' />} />
            <Route path='/software'>
              <Content title={'Software Engineer'} />
            </Route>
            <Route path={'/quality'}>
              <Content title={'Quality Engineer'} />
            </Route>
          </EngineeringContextProvider>
        </Switch>
      </Router>
    </PageWrapper>
  );
}

export default App;
