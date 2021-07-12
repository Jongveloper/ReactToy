import React from "react";
import Main from "./pages/Main";
import { Route, Link } from "react-router-dom";
import AddList from "./pages/AddList";
import Detail from "./pages/Detail";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Main} />
      <Route path="/addlist" exact component={AddList} />
      <Route path="/detail" exact component={Detail}/>
      <Route path="/detail/:index" exact component={Detail}/>
    </div>
  );
}

export default App;
