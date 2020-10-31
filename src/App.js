import React from "react";
import "./App.css";
import Imessage from "./Imessage";
import { selectUser } from "./features/userSlice";
import Login from "./Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector(selectUser);

  return <div className="App">{user ? <Imessage /> : <Login />}</div>;
}

export default App;
