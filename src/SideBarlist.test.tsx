import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import SideBarList from './SideBarList';
import { levels, sideBarData } from './data/data';
import { BrowserRouter as Router } from 'react-router-dom';
import { EngineeringContextProvider } from './EngineeringContext';

describe('SideBarList', () => {
  beforeEach(() => {
    render(
      <Router>
        <EngineeringContextProvider>
          <SideBarList />
        </EngineeringContextProvider>
      </Router>
    );
  });
  
  it('should render SideBarList component', () => {
    const { container } = render(
      <Router>
        <EngineeringContextProvider>
          <SideBarList />
        </EngineeringContextProvider>
      </Router>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  levels.map((levelText: string) => {
    it(`should check that all ${levelText} is visible in the side bar list`, () => {
      expect(screen.getByText(levelText)).toBeVisible();
    });
  });

  describe('Default behaviour on first load', () => {
    it('should check that Associate level is active', () => {
      expect(screen.getByText('Associate')).toHaveClass('active');
      expect(screen.getByText('Associate')).toHaveStyle('color:white');
    });

    it('should check that other than Associate level, all levels are not active', () => {
      levels.slice(1).map((leveltext: string) => {
        expect(screen.getByText(leveltext)).not.toHaveClass('active');
        expect(screen.getByText(leveltext)).not.toHaveStyle('color:white');
      });
    });

    it('should check that all categories are visible', () => {
      sideBarData
        .map((data: any) => data.category)
        .map((categoryName: string) => {
          expect(screen.getByText(categoryName)).toBeVisible();
        });
    });

    it('should check that Overview is active', () => {
      expect(screen.getByTestId('associate-overview')).toHaveClass('active');
      expect(screen.getByTestId('associate-overview')).toHaveStyle(
        'color:white'
      );
    });

    it('should check that other than Overview, all categories are inactive', () => {
      sideBarData
        .slice(1)
        .map((data: any) => data.category)
        .map((categoryName: string) => {
          expect(
            screen.getByTestId(`associate-${categoryName.toLowerCase()}`)
          ).not.toHaveStyle('color:white');
          expect(
            screen.getByTestId(`associate-${categoryName.toLowerCase()}`)
          ).not.toHaveClass('active');
        });
    });

    it('should check that all competencies are visible under Overview', () => {
      sideBarData
        .find((data: any) => {
          data.category === 'Overview';
        })
        ?.competencies.map((competencyName: string) => {
          expect(screen.getByText(competencyName)).toBeVisible();
        });
    });

    it('should check that Job Description is active', () => {
      expect(screen.getByText('Job Description'!)).toHaveStyle('color:white');
    });

    it('should check that other than Job Description, all competencies are inactive', () => {
      sideBarData
        .slice(1)
        .find((data: any) => data.category === 'Overview')
        ?.competencies.map((competencyName: string) => {
          expect(screen.getByText(competencyName)).not.toHaveStyle(
            'color:white'
          );
        });
    });
  });

  describe('Select different categories', () => {
    it('should open Delivery and check that it is active ie text is white', () => {
      fireEvent.click(screen.getByTestId('associate-delivery'));
      expect(screen.getByTestId('associate-delivery')).toHaveClass('active');
      expect(screen.getByTestId('associate-delivery')).toHaveStyle(
        'color:white'
      );
    });
    it('should click Delivery and check all competencies are visible', () => {
      fireEvent.click(screen.getByTestId('associate-delivery'));
      sideBarData
        .find((data: any) => {
          data.category === 'Delivery';
        })
        ?.competencies.map((competencyName: string) => {
          expect(screen.getByText(competencyName)).toBeVisible();
        });
    });

    it('should click Delivery and check that first competency is active ie text is white', () => {
      fireEvent.click(screen.getByTestId('associate-delivery'));
      let firstCompetency = sideBarData.find(
        (data: any) => data.category === 'Delivery'
      )?.competencies[0];

      expect(screen.getByText(firstCompetency!)).toBeVisible();
      expect(screen.getByText(firstCompetency!)).toHaveStyle('color:white');
    });

    it('should click People and check all competencies are visible', () => {
      fireEvent.click(screen.getByTestId('associate-people'));
      sideBarData
        .find((data: any) => data.category === 'People')
        ?.competencies.map((competencyName: string) =>
          expect(screen.getByText(competencyName)).toBeVisible()
        );
    });

    it('should click Stakeholder and check all competencies are visible', () => {
      fireEvent.click(screen.getByTestId('associate-stakeholder'));
      sideBarData
        .find((data: any) => data.category === 'Stakeholder')
        ?.competencies.map((competencyName: string) =>
          expect(screen.getByText(competencyName)).toBeVisible()
        );
    });
  });
});
