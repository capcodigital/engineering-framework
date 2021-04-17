import * as React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';
it('should render Header component', () => {
  const { container } = render(
    <Router>
      <Header />
    </Router>
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('should check that software engineer menu exists', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  expect(screen.getByText('Software Engineer')).toBeTruthy();
});

it('should check that quality engineer menu exists', () => {
  render(
    <Router>
      <Header />
    </Router>
  );
  expect(screen.getByText('Quality Engineer')).toBeTruthy();
});

it('should check that Software Engineer is the active menu option', () => {
 render(
    <Router>
      <EngineeringContextProvider>
        <Header />
      </EngineeringContextProvider>
    </Router>
  );
  expect(screen.getByText('Software Engineer').classList).toContain('active');
});
