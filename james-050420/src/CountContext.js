import React, {useContext, useState} from 'react';

const CountContext = React.createContext();
export const useCount = () => {
  return useContext(CountContext)
};
export const CountProvider = (props) => {
  const [count, setCount] = useState(0);
  return (
    <CountContext.Provider value={[count, setCount]} {...props} />
  );
};
