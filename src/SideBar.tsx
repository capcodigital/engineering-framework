import React, { useContext, useEffect } from 'react';
import { NavHashLink as Link } from 'react-router-hash-link';
import { EngineeringContext } from './EngineeringContext';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import { sideBarData, levels } from './data/data';
import styled from 'styled-components/macro';
import { SmallTag } from './Tag';

const SideNav = styled.div`
  min-width: 360px;
  height: 80vh;
  overflow-y: auto;
  overflow-x: hidden;

  && .list {
    min-width: 300px;
    color: grey;
    a {
      text-decoration: none;
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
      a {
        color: grey;
      }
    }
    .category.list-item.active {
      border-left: 3px solid #e72871;
      a {
        color: white;
      }
    }
    .competency.list-item {
      font-size: 16px;
      a {
        color: grey;
      }
    }
    .competency.list-item.active {
      a {
        color: white;
      }
    }
  }
  @media screen and (max-width: 600px) {
    display: none;
  }
`;

const SideBar = () => {
  const {
    level,
    category,
    competency,
    specialism,
    setLevel,
    setCategory,
    setCompetency,
  } = useContext(EngineeringContext);

  useEffect(() => {
    if (window.location.hash) {
      const temp = window.location.hash.split('#')[1].split('-')[0];
      const categoryfromUrl = temp.charAt(0).toUpperCase() + temp.slice(1);
      setCategory(categoryfromUrl);
    }
  }, [setCategory]);

  useEffect(() => {
    setTimeout(() => {
      const { hash } = window.location;
      if (hash) {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ block: 'start', behavior: 'smooth' });
        }
      }
    }, 100);
  }, []);

  const handleClickCategory = (
    categoryName: string,
    firstCompetency: string
  ) => {
    setCategory(categoryName);
    setCompetency(firstCompetency);
  };
  const handleClickCompetency = (competencyName: string) => {
    setCompetency(competencyName);
  };
  const handleClickLevel = (levelName: string) => {
    setLevel(levelName);
  };

  return (
    <SideNav>
      {levels.map((levelName: string) => (
        <List className='list' key={levelName}>
          <ListItem
            button
            className={`level list-item ${levelName === level ? 'active' : ''}`}
            onClick={() => handleClickLevel(levelName)}
          >
            {levelName}
          </ListItem>
          <Collapse in={level === levelName} timeout='auto' unmountOnExit>
            <List component='nav' className={'nested'}>
              {sideBarData.map((data: any) => (
                <span key={data.category}>
                  <ListItem
                    button
                    className={`category list-item ${
                      category === data.category ? 'active' : ''
                    }`}
                    onClick={() =>
                      handleClickCategory(data.category, data.competencies[0])
                    }
                  >
                    <Link
                      smooth
                      to={`#${data.category.toLowerCase()}-${data.competencies[0]
                        .replaceAll(' ', '-')
                        .toLowerCase()}`}
                    >
                      {data.category}
                    </Link>
                  </ListItem>
                  <Collapse
                    in={category === data.category}
                    timeout='auto'
                    unmountOnExit
                  >
                    <List component='div' disablePadding>
                      {data.competencies.map((competencyName: string) => {
                        // Don't have Framework Criteria at MP level
                        if (
                          level !== 'Managing Principal' ||
                          competencyName !== 'Framework Criteria'
                        )
                          return (
                            <ListItem
                              key={competencyName}
                              button
                              className={`nested competency list-item ${
                                competency === competencyName ? 'active' : ''
                              } `}
                              onClick={() =>
                                handleClickCompetency(competencyName)
                              }
                            >
                              <Link
                                smooth
                                to={`#${
                                  data.category
                                }-${competencyName.replaceAll(
                                  ' ',
                                  '-'
                                )}`.toLowerCase()}
                              >
                                {competencyName}

                                <SmallTag
                                  level={level}
                                  competency={competencyName}
                                  specialism={specialism}
                                />
                              </Link>
                            </ListItem>
                          );
                      })}
                    </List>
                  </Collapse>
                </span>
              ))}
            </List>
          </Collapse>
        </List>
      ))}
    </SideNav>
  );
};

export default SideBar;
