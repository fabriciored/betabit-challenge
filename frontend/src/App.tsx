import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Outlet,
  useMatch,
  useParams,
} from "react-router-dom";

import Home from "./components/pages/home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
        <Home />    
      <Outlet />
    </div>
  );
}


export default App;
