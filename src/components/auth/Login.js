import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "../../managers/AuthManager";


export const Login = ({ setToken }) => {
    const username = useRef();
    const password = useRef();
    const navigate = useNavigate();
    const [isUnsuccessful, setisUnsuccessful] = useState(false);

    const handleLogin = (e) => {
        e.preventDefault();

        const user = {
            username: username.current.value,
            password: password.current.value,
        };

        loginUser(user).then((res) => {
            if ('valid' in res && res.valid) {
                setToken(res.token);
                navigate('/');
            } else {
                setisUnsuccessful(true);
            }
        });
    };

    return (
        <section className="hero is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-one-third">
                            <div className="box">
                                <h1 className="title is-4 has-text-centered">Login</h1>
                                <form onSubmit={handleLogin}>
                                    <div className="field">
                                        <label className="label">Email</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="text"
                                                placeholder="Enter your email"
                                                ref={username}
                                            />
                                        </div>
                                    </div>
                                    <div className="field">
                                        <label className="label">Password</label>
                                        <div className="control">
                                            <input
                                                className="input"
                                                type="password"
                                                placeholder="Enter your password"
                                                ref={password}
                                            />
                                        </div>
                                    </div>
                                    {isUnsuccessful && (
                                        <div className="notification is-danger">
                                            Username or password not valid
                                        </div>
                                    )}
                                    <div className="field is-grouped">
                                        <div className="control">
                                            <button className="button is-link" type="submit">
                                                Login
                                            </button>
                                        </div>
                                        <div className="control" style={{ marginLeft: 'auto' }}>
                                            <Link to="/register" className="button is-success">
                                                Register
                                            </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};