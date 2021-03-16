import React, { useContext, useState } from 'react';
import EngineeringContext from './EngineeringContext';
import { Link } from 'react-router-dom';
import styled from 'styled-components/macro';
import Grid from '@material-ui/core/Grid';
const StyledLink = styled(Link)`
  letter-spacing: 2px;
  font-size: 25px;
  text-decoration: none;
  color: white;
  font-weight: none;
  div {
    padding: 0rem;
    width: 25rem;
    height: 15rem;
    background: #232121cc;
    line-height: 15rem;
    text-align: center;
    border-left: 5px solid red;
  }
`;
const Home = () => {
  const { name, setName } = useContext(EngineeringContext);

  const handleClick = (engRole: string) => {
    setName(engRole);
  };
  return (
    <div>
      <Grid
        container
        justify='center'
        spacing={10}
        style={{ marginTop: '10%' }}
      >
        <Grid item>
          <StyledLink to={'/framework'} onClick={() => handleClick('software')}>
            <div>Software Engineering</div>
          </StyledLink>
        </Grid>
        <Grid item>
          <StyledLink to={'/framework'} onClick={() => handleClick('quality')}>
            <div>Quality Engineering</div>
          </StyledLink>
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
