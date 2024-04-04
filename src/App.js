import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/login" Component={Login}/>
        <Route exact path="/register" Component={Register}/>

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
