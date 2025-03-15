import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginPage = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const error = useSelector((state) => state.auth.error);

    const handleLogin = () => {
        dispatch(login(username, password));
        navigate('/dashboard');
    };

    return (
        <div className="container mt-5">
            <div className="card p-4 mx-auto" style={{ maxWidth: '400px' }}>
                <h2 className="text-center">Login</h2>
                {error && <p className="text-danger">{error}</p>}
                <input className="form-control mb-2" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                <input className="form-control mb-2" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-primary w-100" onClick={handleLogin}>Login</button>
            </div>
        </div>
    );
};

export default LoginPage;
