import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';

it('should renders capco logo', () => {
  render(
    <Router>
      <App />
    </Router>
  );
  const logoElement = screen.getByAltText('Logo');
  expect(logoElement).toBeInTheDocument();
});
