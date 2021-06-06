import React from "react";
import "./App.css";
import AddTodo from "./Components/AddTodo/AddTodo";
import List from "./Components/List/List";

function App() {
  return (
    <div className="App">
      <h1>Todo App</h1>
      <AddTodo />
      <List />
    </div>
  );
}

export default App;
