import React, { useContext, useEffect, FC } from 'react';
import SideBar from './SideBar';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { ListItem } from '@material-ui/core';
import { EngineeringContext } from './EngineeringContext';
import { titles, tags } from './data/data';
import contentData from './data/content';
import images from './img/';
import styled from 'styled-components/macro';

type ContentType = {
  title: 'Software Engineer' | 'Quality Engineer';
};

type ContentHeaderProps = {
  level: string;
};
type TagProps = {
  color: string;
};
const Main = styled.main`
  display: flex;
  height: 80vh;
`;

const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #1f1f1f;
  color: white;
  text-align: left;
`;

const ContentHeader = styled.div<ContentHeaderProps>`
  width: 100%;
  height: 120px;
  padding: 25px 25px 25px 100px;
  background-size: cover;
  background-image: url(${(props) => (images as any)[props.level]});

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
    font-size: 24px;
    font-weight: bold;
    padding-bottom: 16px;
  }
  .description {
    line-height: 24px;
    font-size: 16px;
  }
  hr {
    margin: 48px 0px 24px 0px;
    background-color: white;
  }
  @media screen and (max-width: 600px) {
    padding: 0;
  }
`;

const StyledDescription = styled.p`
  font-size: 16px;
  line-height: 24px;
  li {
    display: list-item;
    margin-bottom: 16px;
  }
`;

const StyledTag = styled.span<TagProps>`
  height: 16px;
  background-color: ${(props) => props.color};
  color: white;
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  line-height: 16px;
  padding: 4px 8px 4px 8px;
  border-radius: 4px;
  margin-left: 20px;
`;

const Content: FC<ContentType> = ({ title }) => {
  const { specialism, level, category, setSpecialism } = useContext(
    EngineeringContext
  );
  useEffect(() => {
    setSpecialism(title);
  }, [title, setSpecialism]);
  return (
    <Main>
      <SideBar />
      <ContentContainer>
        <ContentHeader level={level}>
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
                    id={`${category.toLowerCase()}-${comp.name
                      .replaceAll(' ', '-')
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
                      {comp.name}
                      {['Principal Consultant', 'Managing Principal'].includes(
                        level
                      ) &&
                        ['Technical Leadership', 'Management'].includes(
                          comp.name
                        ) && (
                          <StyledTag
                            color={(tags as any)[comp.name][level].color}
                          >
                            {(tags as any)[comp.name][level][specialism].name}
                          </StyledTag>
                        )}
                    </div>

                    {category === 'Overview' ? (
                      <>
                        <StyledDescription
                          dangerouslySetInnerHTML={{ __html: comp.description }}
                        />
                        <Divider />
                      </>
                    ) : comp.name === 'Framework Criteria' ? (
                      <>
                        <StyledDescription
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
