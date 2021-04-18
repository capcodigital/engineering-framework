import React, { useContext, useState, useEffect, FC } from 'react';
import { EngineeringContext } from './EngineeringContext';
import { Collapse, Divider, List, ListItem } from '@material-ui/core';
import SideBar from './SideBar';
import { Tag } from './Tag';
import { titles } from './data/data';
import contentData from './data/content';
import images from './img/';
import styled from 'styled-components/macro';
import BreadcrumbsNav from './BreadcrumbsNav';
import SideBarList from './SideBarList';

type ContentType = {
  title: 'Software Engineer' | 'Quality Engineer';
};

type ContentHeaderProps = {
  level: string;
};

type ContentContainerProps = {
  menuOpen: boolean;
};

const Main = styled.main`
  display: flex;
  height: 80vh;
  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const ContentContainer = styled.div<ContentContainerProps>`
  width: 100%;
  background-color: #1f1f1f;
  color: white;
  text-align: left;
  display: ${({ menuOpen }) => menuOpen && 'none'};
  @media screen and (max-width: 1000px) {
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;

export const ContentHeader = styled.div<ContentHeaderProps>`
  width: 100%;
  height: 120px;
  padding: 25px 25px 25px 100px;
  background-size: 1280px;
  background-image: url(${({ level }) => (images as any)[level]});

  .level-title {
    font-size: 16px;
    line-height: 24px;
    .level {
      font-weight: bold;
    }
  }
  .category {
    font-size: 36px;
    font-weight: bold;
  }

  @media screen and (max-width: 1000px) {
    height: 96px;
    padding: 16px 25px 25px 25px;
    .level-title {
      font-size: 14px;
      line-height: 16px;
    }
    .category {
      font-size: 32px;
    }
  }
`;

const ContentDiv = styled.div`
  height: calc(100% - 120px);
  overflow: auto;
  ::-webkit-scrollbar {
    display: none;
  }
  .competency-list {
    padding: 0;
  }
  li {
    display: block;
  }
  li.list-item {
    padding: 24px 100px 24px 100px;
  }
  .title {
    width: 100%;
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 16px;
    span {
      margin-right: 20px;
    }
  }
  .description {
    line-height: 24px;
    font-size: 16px;
  }
  hr {
    margin: 48px 0px 24px 0px;
    background-color: white;
  }
  @media screen and (max-width: 1000px) {
    overflow: unset;

    padding: 0;
    li.list-item {
      padding: 24px 28px 24px 28px;
    }
  }
`;

const Description = styled.p`
  font-size: 16px;
  line-height: 24px;
  li {
    display: list-item;
    margin-bottom: 16px;
  }
`;

const Content: FC<ContentType> = ({ title }) => {
  const [open, setOpen] = useState(false);
  const {
    specialism,
    level,
    category,
    setSpecialism,
    setCategory,
    setCompetency,
  } = useContext(EngineeringContext);

  useEffect(() => {
    setSpecialism(title);
  }, [title, setSpecialism]);

  useEffect(() => {
    if (window.location.hash) {
      const [cat, ...comp] = window.location.hash.split('#')[1].split('-');
      const categoryfromUrl = cat.charAt(0).toUpperCase() + cat.slice(1);
      const competencyFromUrl = comp
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      setCategory(categoryfromUrl);
      setCompetency(competencyFromUrl);
    }
  }, []);

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

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <Main>
      <SideBar>
        <SideBarList />
      </SideBar>

      <BreadcrumbsNav open={open} onClick={() => handleClickOpen()}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <SideBarList />
        </Collapse>
      </BreadcrumbsNav>

      <ContentContainer menuOpen={open}>
        <ContentHeader level={level}>
          <div className='level-title'>
            <span className='level'>{level}</span> •{' '}
            {(titles as any)[specialism][level]}
          </div>
          <div className='category'>{category}</div>
        </ContentHeader>
        <ContentDiv>
          <List component='div' className={'competency-list'} data-testid='competency-list'>
            {(contentData as any)[level][category].map(
              (comp: any) =>
                [specialism, 'All'].includes(comp.specialism) && (
                  <ListItem
                    id={`${category.toLowerCase()}-${comp.name
                      .replace(/\s/g, '-')
                      .toLowerCase()}`}
                    className='list-item'
                    key={`content-${comp.name}`}
                    alignItems='flex-start'
                    style={{
                      background:
                        comp.name === 'Framework Criteria' ? '#161616' : '',
                    }}
                  >
                    <div className='title'>
                      <span>{comp.name}</span>

                      <Tag
                        level={level}
                        competency={comp.name}
                        specialism={specialism}
                      />
                    </div>

                    {category === 'Overview' ? (
                      <>
                        <Description
                          dangerouslySetInnerHTML={{ __html: comp.description }}
                        />
                        <Divider />
                      </>
                    ) : comp.name === 'Framework Criteria' ? (
                      <>
                        <Description
                          dangerouslySetInnerHTML={{ __html: comp.description }}
                        />
                        <Divider />
                        <div className='title'>{comp.name2}</div>
                        <p className='description'>{comp.description2}</p>
                        <Divider />
                        <div className='title'>{comp.name3}</div>
                        <p className='description'>{comp.description3}</p>
                      </>
                    ) : (
                      <>
                        <p className='description'>{comp.description}</p>
                        <Divider />
                      </>
                    )}
                  </ListItem>
                )
            )}
          </List>
        </ContentDiv>
      </ContentContainer>
    </Main>
  );
};

export default Content;
