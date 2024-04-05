import React from "react";

function RegisterForm({
    name,
    setName,
    pw,
    setPw,
    email,
    setEmail,
    sendRegisterRequest,
}) {
    function handleSubmit(e) {
        e.preventDefault();
        sendRegisterRequest(name, email, pw);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="d-flex flex-column align-items-center"
        >
            <div className="form-control mt-3">
                <label htmlFor="form-input__name" className="form-label">
                    Your name:
                </label>
                <input
                    type="text"
                    placeholder="enter tour name"
                    className="form-control"
                    id="form-input__name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="form-control mt-3">
                <label htmlFor="form-input__email" className="form-label">
                    Your email:
                </label>
                <input
                    type="email"
                    placeholder="enter tour name"
                    className="form-control"
                    id="form-input__email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="form-control mt-3">
                <label htmlFor="form-input__pw" className="form-label">
                    Your password:
                </label>
                <input
                    type="password"
                    placeholder="enter tour name"
                    className="form-control"
                    id="form-input__pw"
                    value={pw}
                    onChange={(e) => setPw(e.target.value)}
                />
            </div>
            <button className="btn btn-primary mt-3">Register</button>
        </form>
    );
}

export default RegisterForm;
