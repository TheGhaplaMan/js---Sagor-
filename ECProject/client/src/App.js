import logo from "./logo.svg";
import { io } from "socket.io-client";
import "./App.css";

function App() {
  io("http://localhost:4000");

  return (
    <div className="App">
      <p>Tor Heda</p>
    </div>
  );
}

export default App;
