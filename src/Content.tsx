import React, { useContext, useEffect, FC } from 'react';
import SideBar from './SideBar';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import { EngineeringContext } from './EngineeringContext';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import styled from 'styled-components/macro';
import { titles, contentData } from './data';
type ContentType = {
  title: 'Software Engineer' | 'Quality Engineer';
};

const Main = styled.main`
  margin-top: 4rem;
  display: flex;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #1f1f1f;
  color: white;
  text-align: left;
  overflow: scroll;
`;
const ContentHeader = styled.div`
  width: 100%;
  height: 120px;
  padding: 25px 25px 25px 100px;

  background: purple;
  background-size: cover;
  background-image: url(/img/associate.png);

  .level-title {
    font-size: 16px;
    .level {
      font-weight: bold;
    }
  }
  .category {
    font-size: 36px;
    font-weight: bold;
  }
  @media screen and (max-width: 600px) {
    padding: 25px 100px 25px 25px;
  }
`;

const ContentDiv = styled.div`
  padding: 25px 100px 25px 100px;
  li {
    display: block;
  }
  .title {
    font-size: 24px;
    padding-bottom: 16px;
  }
  .description {
    font-size: 16px;
  }
  hr {
    margin: 48px 0 48px 0;
    background-color: white;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const Content: FC<ContentType> = ({ title }) => {
  const { specialism, level, category, competency, setSpecialism } = useContext(
    EngineeringContext
  );

  useEffect(() => {
    setSpecialism(title);
  }, [title, setSpecialism]);

  return (
    <Main>
      <SideBar />
      <ContentContainer>
        <ContentHeader>
          <div className='level-title'>
            <span className='level'>{level}</span> •{' '}
            {(titles as any)[specialism][level]}
          </div>
          <div className='category'>{category}</div>
        </ContentHeader>
        <ContentDiv>
          <List component='div' className={'competency-list'}>
            {(contentData as any)[level][category].map(
              (comp: any) =>
                [specialism, 'All'].includes(comp.specialism) && (
                  <ListItem
                    key={`content-${comp.name}`}
                    alignItems='flex-start'
                  >
                    <div className='title'>{comp.name}</div>
                    <div className='description'>{comp.description}</div>
                    <Divider />
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
