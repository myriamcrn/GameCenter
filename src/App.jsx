import React from "react";
import { Welcome } from "./components/Welcome/Welcome";
import { Header } from "./components/Header/Header";
import { Title } from "./components/Title/Title";
import "./App.css";

function App() {
  return (
    <main>
      <Welcome />
      <Header />
      <Title />
    </main>
  );
}

export default App;
