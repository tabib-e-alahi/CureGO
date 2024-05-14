import  { createContext,  useState } from "react";

export const ConcernContext = createContext(null);



const ConcernProvider = ({ children }) => {
  const [selectedConcern, setSelectedConcern] = useState(null);

  const handleConcernClick = (concern) => {
    setSelectedConcern(concern);
  };
const providerInfo = {selectedConcern,handleConcernClick}
  return (
    <ConcernContext.Provider value={providerInfo}>
      {children}
    </ConcernContext.Provider>
  );
};

export default ConcernProvider
