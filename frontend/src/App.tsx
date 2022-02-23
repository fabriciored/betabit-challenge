import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useMatch,
  useParams,
} from "react-router-dom";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div style={{
      padding: '30px',
    }}>
      <h1>Contact List</h1>
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/contacts">Contacts</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}

export default App;
