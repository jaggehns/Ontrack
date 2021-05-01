import React from "react";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Button from "./components/Button";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";
import Table from "./components/Table";
import Grid from "./components/Grid";
import CenterButton from "./components/CenterButton";

function App() {
  return (
    <div className="App">
      <Button />

      <Avatar />

      <Grid />

      <CenterButton />

      <Counter />

      <Table />
    </div>
  );
}

export default App;
