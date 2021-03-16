import { createContext } from 'react';

const EngineeringContext = createContext({
  name: '',
  setName: (name: string) => {},
});

export default EngineeringContext;
