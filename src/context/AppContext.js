import React from 'react';

const AppContext = React.createContext({
  practices: [],
  setPractice: () => {},
  error: null,
  setError: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
