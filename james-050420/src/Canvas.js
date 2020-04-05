import React, { useState } from "react";
import styled from "@emotion/styled";
import {useCount} from "./CountContext";
import {useColour} from "./ColourContext";

const HalfDivider = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Circle = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 1.5rem;
  background-color: ${(props) => props.circleColour};
  position: absolute;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
`;

const SameCircle = ({ circleColour, x, y }) => {
  return (
    <div
      style={{
        height: "3rem",
        width: "3rem",
        borderRadius: "3rem",
        backgroundColor: circleColour,
        position: "absolute",
        top: y,
        left: x,
      }}
    />
  );
};

const Canvas = () => {

  const [count, setCount] = useCount();
  const [colour, dispatch] = useColour();

  const [circleCoords, setCircleCoords] = useState([]);

  const addCircle = (event) => {
    event.preventDefault();
    setCount(circleCoords.length + 1);
    dispatch('random');
    setCircleCoords([...circleCoords, [event.clientX, event.clientY]]);
  };

  return (
    <HalfDivider onClick={addCircle}>
      {circleCoords.map((coord) => {
        return (
          <Circle
            key={`${count}${coord}`}
            circleColour={colour}
            x={coord[0]}
            y={coord[1]}
          />
        );
      })}
    </HalfDivider>
  );
};

export default Canvas;
