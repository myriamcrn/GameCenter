import React, { useState } from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Grid } from "./components/Grid/Grid";
import "./App.css";
import { Keyboard } from "./components/Keyboard/Keyboard";
import { PopUpRules } from "./components/PopUpRules/PopUpRules";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main>
      <Welcome />
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      <Title />
      <Grid />
      <Keyboard />
      <PopUpRules setIsOpen={setIsOpen} isOpen={isOpen} />
    </main>
  );
}

export default App;
