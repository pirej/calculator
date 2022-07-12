import { useContext, createContext, useReducer } from 'react';

export const LanguageContext = createContext();

const initialState = {
  lang: 'makedonski',
};

export const langReducer = (state, action) => {
  switch (action.type) {
    case 'LANGUAGE':
      return { ...state, lang: action.payload };
    // case 'ENGLISH':
    //   return { ...state };
    default:
      return { ...state };
  }
};

export const LanguageProvider = ({ children }) => {
  const [state, dispatch] = useReducer(langReducer, initialState);

  const jazik = izbranJazik => {
    dispatch({ type: 'LANGUAGE', payload: izbranJazik });
  };

  return (
    <LanguageContext.Provider value={{ ...state, jazik }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguageContext = () => {
  return useContext(LanguageContext);
};
