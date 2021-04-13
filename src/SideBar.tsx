import React, { useContext, useEffect } from 'react';
import { EngineeringContext } from './EngineeringContext';
import styled from 'styled-components/macro';
import SideBarList from './SideBarList';

const SideNav = styled.div`
  min-width: 300px;
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
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

const SideBar = () => {
  const {
    setCategory,
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

  return (
    <SideNav>
      <SideBarList/>
    </SideNav>
  );
};

export default SideBar;
