import { createContext, useState, FC } from "react";
export type EngineeringContextType = {
  specialism: string;
  level: string;
  category: string;
  competency: string;
  setSpecialism: (newSpecialism: string) => void;
  setLevel: (newLevel: string) => void;
  setCategory: (newCategory: string) => void;
  setCompetency: (newComptenecy: string) => void;
};

export const EngineeringContext = createContext<EngineeringContextType>({
  specialism: "",
  level: "",
  category: "",
  competency: "",
  setSpecialism: () => {},
  setLevel: () => {},
  setCategory: () => {},
  setCompetency: () => {},
});

export const EngineeringContextProvider: FC = ({ children }) => {
  const [specialism, setSpecialism] = useState("Software Engineer");
  const [level, setLevel] = useState("Associate");
  const [category, setCategory] = useState("Overview");
  const [competency, setCompetency] = useState("Description");
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
