import * as React from 'react';
import { render, screen } from '@testing-library/react';
import BreadcrumbsNav from './BreadcrumbsNav';
import { levels, sideBarData } from './data/data';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';

describe('BreadcrumbsNav', () => {

it('should render BreadcrumbsNav component with default values', () => {
    const {container} = render(
        <Router>
        <EngineeringContextProvider>
          <BreadcrumbsNav open={true} onClick={() => {}}/>
        </EngineeringContextProvider>
      </Router>
    );
    
    expect(container.firstChild).toHaveTextContent('Digital Engineering');
    expect(container.firstChild).toHaveTextContent('Associate');
    expect(container.firstChild).toHaveTextContent('Overview');
    expect(container.firstChild).toHaveTextContent('Job Description');
  });
});
