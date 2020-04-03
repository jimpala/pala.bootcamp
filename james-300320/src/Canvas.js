import React, { useState } from "react";
import styled from "@emotion/styled";

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

const Canvas = ({ colour, countHandler }) => {
  const [circleCoords, setCircleCoords] = useState([]);

  const addCircle = (event) => {
    event.preventDefault();
    countHandler(circleCoords.length + 1)
    setCircleCoords([...circleCoords, [event.clientX, event.clientY]]);
  };

  return (
    <HalfDivider onClick={addCircle}>
      {circleCoords.map((coord) => {
        return (
          <Circle
            key={`${coord[0]},${coord[1]}`}
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
