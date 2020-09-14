import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import Comment from "./components/Comment";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Book}></Route>
        <Route exact path="/comment" component={Comment}></Route>
      </Switch>
    </div>
  );
}

export default App;
