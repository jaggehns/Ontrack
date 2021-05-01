import React from "react";
//Import Styles
import "./styles/app.scss";
//Adding Components
import Button from "./components/Button";
import Avatar from "./components/Avatar";
import Counter from "./components/Counter";
import Table from "./components/Table";

function App() {
  return (
    <div className="App">
      <div className="button__container">
        <Button />
      </div>
      <div className="avatar__div">
        <Avatar />
      </div>
      <div className="grid">
        <Button />
        <Button />
        <Button />
        <Button />
      </div>
      <div className="btn__container">
        <Button />
      </div>
      <div className="counter__container">
        <Counter />
      </div>
      <div className="table__container">
        <Table />
      </div>
    </div>
  );
}

export default App;
