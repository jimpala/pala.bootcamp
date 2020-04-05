import React, {useContext, useReducer} from 'react';

const COLOURS = ["tomato", "hotpink", "teal", "slategray"];

const ColourContext = React.createContext();

export const useColour = () => {
  return useContext(ColourContext)
};

export const ColourProvider = (props) => {
  const reducer = (state, action) => {
    switch (action) {
      case 'random':
        return COLOURS[Math.floor(Math.random() * COLOURS.length)]
      default:
        return 'black'
    }
  }

  const [colour, dispatch] = useReducer(reducer, 'black');

  return (
    <ColourContext.Provider value={[colour, dispatch]} {...props} />
  );
};
