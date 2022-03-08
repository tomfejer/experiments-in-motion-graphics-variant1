//https://www.tomfejer.com/experiment-in-motion-graphics/
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258

import React from "react";
import useCanvas from "./useCanvas";

const Canvas = (props) => {
  const { draw, ...rest } = props;
  const canvasRef = useCanvas(draw);

  return (
    <React.Fragment>
      <canvas ref={canvasRef} {...rest} />
    </React.Fragment>
  );
};

export default Canvas;
