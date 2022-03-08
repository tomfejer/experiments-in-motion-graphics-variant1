//https://www.tomfejer.com/experiment-in-motion-graphics/
//How to Code: Sine Waves by Chris Courses https://youtu.be/VNmTubIDZOY

import React from "react";
import Canvas from "./Canvas";

import { Pane } from "tweakpane";

import "./styles.css";

function App() {
  const backgroundColor = {
    r: 0,
    g: 0,
    b: 0,
    a: 0.03
  };

  const wave = {
    y: 300,
    length: 0.01,
    amplitude: 160,
    frequency: 0.05,
    yamp: 0
  };

  const strokeColor = {
    h: 0,
    s: 0,
    l: 255
  };

  let increment = wave.frequency;

  const pane = new Pane();

  const folderPane = pane.addFolder({
    title: "⎇ Controls",
    expanded: false
  });

  folderPane.addInput(backgroundColor, "a", {
    min: 0.005,
    max: 0.1,
    step: 0.001
  });
  folderPane.addInput(wave, "y", { min: 0, max: 500, step: 1 });
  folderPane.addInput(wave, "length", { min: -0.001, max: 0.01, step: 0.0001 });
  folderPane.addInput(wave, "amplitude", { min: 0, max: 500, step: 1 });
  folderPane.addInput(wave, "frequency", { min: 0.005, max: 0.1, step: 0.001 });
  folderPane.addInput(wave, "yamp", { min: 0, max: 100, step: 1 });

  const draw = (ctx, frameCount) => {
    ctx.fillStyle = `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`;
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

    ctx.beginPath();

    ctx.moveTo(0, ctx.canvas.width / 2);

    for (let i = 0; i < ctx.canvas.width; i++) {
      ctx.lineTo(
        i,
        wave.y +
          wave.yamp * Math.sin(increment) +
          Math.sin(i * wave.length + increment) *
            wave.amplitude *
            Math.sin(increment)
      );
    }

    ctx.strokeStyle = `hsl(${Math.abs(strokeColor.h * Math.sin(increment))},${
      strokeColor.s
    }%,${strokeColor.l}%)`;

    ctx.stroke();

    increment += wave.frequency;
    // ctx.canvas.toDataURL("png");
    // var dataURL = ctx.canvas.toDataURL();
  };

  return (
    <React.Fragment>
      <Canvas draw={draw} />{" "}
      {/* <a
        href={dataURL}
        download
        style={{
          color: "red",
          zIndex: 1000,
          position: "absolute",
          top: 0,
          left: 0
        }}
      >
        download
      </a> */}
      <div
        style={{
          width: "1px",
          height: "100vh",
          position: "absolute",
          top: 0,
          left: 0,
          background: "black"
        }}
      ></div>
    </React.Fragment>
  );
}

export default App;
