import React from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import { Grid } from "./components/Grid/Grid";
import "./App.css";

function App() {
  return (
    <main>
      <Welcome />
      <Header />
      <Title />
      <Grid />
    </main>
  );
}

export default App;
