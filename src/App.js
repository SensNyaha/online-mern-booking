import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import Nav from "./components/navi/Nav";

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
