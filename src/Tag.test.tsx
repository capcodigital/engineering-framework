import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { Tag, SmallTag } from './Tag';
import { levels } from './data/data';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';

describe('Tag', () => {
  levels.slice(0, 3).map((level: string) => {
    it(`should not render Tag component for ${level}`, () => {
      render(
        <Router>
          <EngineeringContextProvider>
            <Tag
              level={level}
              competency={'Technical Delivery'}
              specialism={'Software Engineer'}
            />
          </EngineeringContextProvider>
        </Router>
      );

      expect(screen.queryByText(level)).toBeNull();
    });
  });
 
  it('should render Tag component for Principal Software Engineer Management path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Tag
            level={'Principal Consultant'}
            competency={'Management'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('Engineering Lead')).toBeTruthy();
  });

  it('should render SmallTag component for Principal Software Engineer Management path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <SmallTag
            level={'Principal Consultant'}
            competency={'Management'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('EL')).toBeTruthy();
  });

  it('should render Tag component for Principal Software Engineer Technical path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Tag
            level={'Principal Consultant'}
            competency={'Technical Leadership'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('Principal Engineer')).toBeTruthy();
  });

  it('should render Tag component for Principal Software Engineer Technical path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <SmallTag
            level={'Principal Consultant'}
            competency={'Technical Leadership'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('PE')).toBeTruthy();
  });

  it('should render Tag component for Managing Principal Software Engineer Management path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Tag
            level={'Managing Principal'}
            competency={'Management'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('Senior Engineering Lead')).toBeTruthy();
  });

  it('should render SmallTag component for Managing Principal Software Engineer Management path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <SmallTag
            level={'Managing Principal'}
            competency={'Management'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('SEL')).toBeTruthy();
  });

  it('should render Tag component for Managing Principal Software Engineer Technical path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <Tag
            level={'Managing Principal'}
            competency={'Technical Leadership'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('Distinguished Engineer')).toBeTruthy();
  });

  it('should render SmallTag component for Managing Principal Software Engineer Technical path', () => {
    render(
      <Router>
        <EngineeringContextProvider>
          <SmallTag
            level={'Managing Principal'}
            competency={'Technical Leadership'}
            specialism={'Software Engineer'}
          />
        </EngineeringContextProvider>
      </Router>
    );

    expect(screen.queryByText('DE')).toBeTruthy();
  });
});
