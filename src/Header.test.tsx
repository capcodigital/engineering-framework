import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';

describe('Header', () => {
  it('should render Header component', () => {
    const { container } = render(
      <Router>
        <Header />
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should check that Software Engineer menu exists', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText('Software Engineer')).toBeTruthy();
  });

  it('should check that Quality Engineer menu exists', () => {
    render(
      <Router>
        <Header />
      </Router>
    );
    expect(screen.getByText('Quality Engineer')).toBeTruthy();
  });

  it('should check that by default Software Engineer is active, Quality Engineer is not', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Header />
        </EngineeringContextProvider>
      </Router>
    );
    expect(screen.getByText('Software Engineer').classList).toContain('active');
    expect(screen.getByText('Software Engineer')).toHaveStyle('color:white');
    expect(screen.getByText('Quality Engineer')).toHaveStyle('color:grey');
  });

  it('should cicking Quality Engineer and check that text colour changes to white', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Header />
        </EngineeringContextProvider>
      </Router>
    );

    fireEvent.click(screen.getByText('Quality Engineer'));

    expect(screen.getByText('Software Engineer')).toHaveStyle('color:grey');
    expect(screen.getByText('Quality Engineer')).toHaveStyle('color:white');
  });
});
