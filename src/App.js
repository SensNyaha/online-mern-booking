import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./auth/Login";
import Register from "./auth/Register";
import Home from "./booking/Home";
import Nav from "./components/navi/Nav";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <ToastContainer></ToastContainer>
            <Routes>
                <Route exact path="/" Component={Home} />
                <Route exact path="/login" Component={Login} />
                <Route exact path="/register" Component={Register} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
