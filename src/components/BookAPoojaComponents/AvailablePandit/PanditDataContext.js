import React, { createContext, useContext, useState } from 'react';
const PanditDataContext = createContext();
export const PanditDataProvider = ({ children }) => {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <PanditDataContext.Provider value={{ filteredData, setFilteredData }}>
      {children}
    </PanditDataContext.Provider>
  );
};
export const usePanditData = () => useContext(PanditDataContext);
