import React, { useContext, useEffect, FC } from 'react';
import SideBar from './SideBar';
import { EngineeringContext } from './EngineeringContext';
import styled from 'styled-components/macro';

type ContentType = {
  title: 'Software Engineer' | 'Quality Engineer';
};

const Main = styled.main`
  margin: 2rem;
`;

const Content: FC<ContentType> = ({ title }) => {
  const { specialism, level, setSpecialism, setLevel } = useContext(
    EngineeringContext
  );
  useEffect(() => {
    setSpecialism(title);
  }, [title]);

  console.log(specialism);
  console.log(level);
  return (
    <Main>
      <SideBar />
      <div></div>
    </Main>
  );
};

export default Content;
