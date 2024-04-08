import React, { useState } from "react";
import RegisterForm from "../components/register/RegisterForm";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { toast } from "react-toastify";

function Register(props) {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const nav = useNavigate();
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
            nav("/login");
            toast.success(JSON.stringify(axResult.data.message));
        } catch (e) {
            toast.error(e.response.data.message);
            console.log(e);
        }
    }

    return (
        <>
            <div className="text-center container-fluid bg-secondary p-5">
                <h1>Registration</h1>
            </div>
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
