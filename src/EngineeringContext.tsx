import { createContext, useState, FC } from 'react';

export const EngineeringContext = createContext({
  specialism: '',
  level:'',
  setSpecialism: (newSpecialism: string) => {},
  setLevel: (newLevel: string) => {},
});

export const EngineeringContextProvider: FC = ({ children }) => {
  const [specialism, setSpecialism] = useState('');
  const [level, setLevel] = useState('Associate');
  const initialValue = {
    specialism,
    level,
    setSpecialism,
    setLevel,
  };
  return (
    <EngineeringContext.Provider
      value={initialValue}
    >{children}</EngineeringContext.Provider>
  );
};


//   category:'',
//   competency:'',
//   setCategory: (name: string) => {},
//   setCompetency: (name: string) => {},
