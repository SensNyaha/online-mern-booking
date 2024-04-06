import React, { useState } from "react";
import RegisterForm from "../components/register/RegisterForm";

import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

async function sendRegisterRequest(name, email, pw) {
    try {
        const axResult = await axios.post(
            `http://127.0.0.1:3001/api/register`,
            {
                name,
                email,
                password: pw,
            }
        );

        toast.success(JSON.stringify(axResult.data));
    } catch (e) {
        toast.error(e.response.data.message);
        console.log(e);
    }
}

function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    return (
        <>
            <div className="text-center container-fluid bg-secondary p-5">
                <h1>Registration</h1>
            </div>
            <ToastContainer />
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                        <RegisterForm
                            name={name}
                            email={email}
                            pw={pw}
                            setName={setName}
                            setEmail={setEmail}
                            setPw={setPw}
                            sendRegisterRequest={sendRegisterRequest}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Register;
