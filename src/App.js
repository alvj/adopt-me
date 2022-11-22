import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Caramel",
      animal: "Dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "Mowgli",
      animal: "Dog",
      breed: "Mix",
    }),
    React.createElement(Pet, {
      name: "Koda",
      animal: "Dog",
      breed: "Samoyed",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
