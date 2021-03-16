import React, { useContext } from 'react';
import EngineeringContext from './EngineeringContext';
import CustomisedTabs from './CustomisedTabs';

const FrameworkPage = () => {
  const { name, setName } = useContext(EngineeringContext);
  console.log(name);
  return (
    <div style={{}}>
      <CustomisedTabs />
    </div>
  );
};

export default FrameworkPage;
