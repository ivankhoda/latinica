import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Title from "./components/Styled/Title";
import WorkingField from "./components/WorkingField/WorkingField";

function App() {
  return (
    <div className="App">
      <Title>Privjet eto Latinica</Title>
      <NavBar />
      <WorkingField />
    </div>
  );
}

export default App;
