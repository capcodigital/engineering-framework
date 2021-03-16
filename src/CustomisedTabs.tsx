import React, { FC, useContext, useState, ChangeEvent } from 'react';
import EngineeringContext from './EngineeringContext';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const StyledTabs = withStyles({
  root: {
    background: 'black',
    display: 'inline-block',
  },
  indicator: {
    backgroundColor: 'red',
  },
})(Tabs);

const StyledTab = withStyles({
  root: {
    textTransform: 'none',
    fontFamily: 'Impact',
    marginTop: '2rem',
    color: 'white',
    marginRight: 30,
    '&:hover': {
      color: 'white',
      opacity: 1,
    },
    // '&:focus': {
    //   color: 'red',
    // },
  },
})(Tab);

const CustomisedTabs: FC = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <StyledTabs value={value} onChange={handleChange} aria-label='ant example'>
      <StyledTab disableRipple label='ASSOCIATE ENGINEER' />
      <StyledTab disableRipple label='CONSULTANT ENGINEER' />
      <StyledTab disableRipple label='SENIOR ENGINEER' />
      <StyledTab disableRipple label='PRINCIPAL ENGINEER' />
      <StyledTab disableRipple label='MANAGING PRINCIPAL ENGINEER' />
    </StyledTabs>
  );
};

export default CustomisedTabs;
