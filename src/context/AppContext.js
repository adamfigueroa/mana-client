import React from 'react';

const AppContext = React.createContext({
  practices: [],
  setPractice: () => {},
});

AppContext.displayName = 'AppContext';

export default AppContext;
