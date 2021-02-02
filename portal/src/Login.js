import logo from './logo.svg';
import { useState } from 'react';
import action from "./portalState";

function Login(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleInputName = (e) => {
        setUsername(e.target.value);
    }
    const handleInputPwd = (e) => {
        setPassword(e.target.value);
    }
    const handleLogin = () => {
        action.setGlobalState({
            user: {
                username,
                password
            }
        });
        props.onLoginSuccess && props.onLoginSuccess();
    }
    return (
        <div className="portal-login">
            <div>
                <input type="text" value={username} onInput={(e) => handleInputName(e) } />
            </div>
            <div>
                <input type="text" value={password} onInput={(e) => handleInputPwd(e) } />
            </div>
            <div>
                <button onClick={() => handleLogin()}>Login</button>
            </div>
        </div>
    )
}

export default Login;
