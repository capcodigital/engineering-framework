import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Content from './Content';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';
import { ContentContainer, ContentHeader } from './Content';

describe('Content', () => {
  it('should render Content component', () => {
    const { container } = render(
      <Router>
        <EngineeringContextProvider>
          <Content title={'Software Engineer'} />
        </EngineeringContextProvider>
      </Router>
    );
    expect(container).toMatchSnapshot();
  });

  describe('Header', () => {
    it('should check that correct background image renders', () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <ContentHeader level={'Associate'} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.firstChild).toHaveStyle(
        'background-image: url(associate.png)'
      );
    });

    it('should render level title with Associate Engineer text by default', () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <Content title={'Software Engineer'} />
          </EngineeringContextProvider>
        </Router>
      );
      expect(container.querySelector('.level-title')).toHaveTextContent(
        'Associate • Associate Engineer'
      );
    });

    it('should click Consultant in the side bar and render level title with Consultant Engineer text', () => {
      const { container } = render(
        <Router>
          <EngineeringContextProvider>
            <Content title={'Software Engineer'} />
          </EngineeringContextProvider>
        </Router>
      );

      fireEvent.click(screen.getByText('Consultant'));
      expect(container.querySelector('.level-title')).toHaveTextContent(
        'Consultant • Engineer'
      );
    });
  });

  it('should check that ContentContainer is hidden when menu is open on mobile', () => {
    const { container } = render(
      <Router>
        <EngineeringContextProvider>
          <ContentContainer menuOpen={true} />
        </EngineeringContextProvider>
      </Router>
    );
    expect(container.firstChild).toHaveStyle('display: none');
  });
});
