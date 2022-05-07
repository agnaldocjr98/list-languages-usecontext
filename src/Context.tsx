import { createContext, useState, useContext } from "react";

interface LanguagesContextProps {
  languages: Array<string>;
  addLanguages: (language: string) => void;
}

interface LanguagesProviderProps {
  children: React.ReactNode;
}

export const LanguagesContext = createContext({} as LanguagesContextProps);

export const LanguagesProvider = ({ children }: LanguagesProviderProps) => {
  const [languages, setLanguages] = useState<Array<string>>(["JAVA", "C#"]);

  function addLanguages(language: string) {
    setLanguages([...languages, language]);
  }

  return (
    <LanguagesContext.Provider
      value={{
        languages,
        addLanguages,
      }}
    >
      {children}
    </LanguagesContext.Provider>
  );
};

export function useLanguages() {
  const context = useContext(LanguagesContext);
  return context;
}
