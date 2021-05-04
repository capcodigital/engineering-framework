import * as React from 'react';
import { render } from '@testing-library/react';
import BreadcrumbsNav from './BreadcrumbsNav';
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
    
    expect(container.firstChild).toHaveTextContent('Software EngineerAssociateOverviewJob Description');
  });
});
