import React, { useState, useContext } from 'react';
import {EngineeringContext} from './EngineeringContext';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import styled from 'styled-components/macro';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { sideBarData, levels } from './data';

const StyledList = styled(List)`
  && {
    width: 100%;
    max-width: 325px;
    color: grey;

    .MuiSvgIcon-root {
      display: none;
    }

    .active {
      color: white;
    }
    .nested {
      margin-left: 15px;
    }
    .list-item {
      height: 32px;
      margin-bottom: 8px;
    }

    .level.list-item {
      font-size: 20px;
      font-weight: bold;
    }
    .category.list-item {
      font-size: 16px;
      font-weight: bold;
    }
    .category.list-item.active {
      border-left: 3px solid #e72871;
    }
    .competency.list-item {
      font-size: 16px;
    }
  }
`;

const SideNav = styled.div``;

const SideBar = () => {
  const { specialism, level, setSpecialism, setLevel } = useContext(EngineeringContext);
  const [activeCategory, setActiveCategory] = useState(0);
  const [activeCompetency, setActiveCompetency] = useState(0);

  const handleClickCategory = (idx: number) => {
    setActiveCategory(idx);
    setActiveCompetency(0);
  };
  const handleClickCompetency = (idx: number) => {
    setActiveCompetency(idx);
  };
  const handleClickLevel = (levelName: string) => {
    setLevel(levelName);
    setActiveCompetency(0);
    setActiveCategory(0);
  };

  return (
    <SideNav>
      {levels.map((levelName: string) => (
        <StyledList key={levelName}>
          <ListItem
            button
            className={`level list-item ${
              levelName === level ? 'active' : ''
            }`}
            onClick={() => handleClickLevel(levelName)}
          >
            {levelName}
            {level === levelName ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse in={level === levelName} timeout='auto' unmountOnExit>
            <List component='nav' className={'nested'}>
              {sideBarData.map((data: any, categoryIdx: number) => (
                <span key={data.category}>
                  <ListItem
                    button
                    className={`category list-item ${
                      categoryIdx === activeCategory ? 'active' : ''
                    }`}
                    onClick={() => handleClickCategory(categoryIdx)}
                  >
                    {data.category}
                    {activeCategory === categoryIdx ? (
                      <ExpandLess />
                    ) : (
                      <ExpandMore />
                    )}
                  </ListItem>
                  <Collapse
                    in={activeCategory === categoryIdx}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {data.competencies.map(
                        (competencyName: string, competencyIdx: number) => (
                          <ListItem
                            key={competencyName}
                            button
                            className={`nested competency list-item ${
                              competencyIdx === activeCompetency ? 'active' : ''
                            }`}
                            onClick={() => handleClickCompetency(competencyIdx)}
                          >
                            <ListItemText primary={competencyName} />
                          </ListItem>
                        )
                      )}
                    </List>
                  </Collapse>
                </span>
              ))}
            </List>
          </Collapse>
        </StyledList>
      ))}
    </SideNav>
  );
};

export default SideBar;
