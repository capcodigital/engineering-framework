import { createContext, useState, FC } from 'react';

export const EngineeringContext = createContext({
  specialism: '',
  level: '',
  category: '',
  competency: '',
  setSpecialism: (newSpecialism: string) => {},
  setLevel: (newLevel: string) => {},
  setCategory: (newCategory: string) => {},
  setCompetency: (newComptenecy: string) => {},
});

export const EngineeringContextProvider: FC = ({ children }) => {
  const [specialism, setSpecialism] = useState('Software Engineer');
  const [level, setLevel] = useState('Associate');
  const [category, setCategory] = useState('Overview');
  const [competency, setCompetency] = useState('Job Description');

  const initialValue = {
    specialism,
    level,
    category,
    competency,
    setSpecialism,
    setLevel,
    setCategory,
    setCompetency,
  };

  return (
    <EngineeringContext.Provider value={initialValue}>
      {children}
    </EngineeringContext.Provider>
  );
};
