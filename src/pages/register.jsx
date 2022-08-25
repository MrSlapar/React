import { useRef } from 'react';
import './authform.css';

function register() {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passwordRef = useRef(null);

    return (
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Register</h3>
                <div className="card-text">
                    <div>
                    <label className="form-label" htmlFor="name">
                            Name
                        </label>
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            className="form-control"
                        />
                        <label className="form-label" htmlFor="email">
                            Email
                        </label>
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            className="form-control"
                        />
                    </div>
                    <div>
                        <label className="form-label" htmlFor="password">
                            Password
                        </label>
                        <input
                            ref={passwordRef}
                            type="password"
                            id="password"
                            className="form-control"
                        />
                    </div>
                </div>
                <button type="button" className="btn btn-primary">register</button>
            </div>
        </div>
    )
}
export default register;