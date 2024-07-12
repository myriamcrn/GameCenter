import React from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Grid } from "./components/Grid/Grid";
import "./App.css";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { PopUpRules } from "./components/PopUpRules/PopUpRules";

function App() {
  return (
    <main>
      <Welcome />
      <Header />
      <Title />
      <Grid />
      <Keyboard />
      <PopUpRules />
    </main>
  );
}

export default App;
