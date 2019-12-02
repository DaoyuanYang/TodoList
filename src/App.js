import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./Component/toDo";
import Todo from "./Component/toDo";
import ToDoList from "./Component/toDoList";

function App() {
  return (
    <React.Fragment>
      <ToDoList></ToDoList>
    </React.Fragment>
  );
}

export default App;
