import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProfile } from '../redux/actions/authActions';

const Profile = () => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.auth.user);
    
    const [name, setName] = useState(user.name);
    const [password, setPassword] = useState('');

    const handleUpdate = () => {
        dispatch(updateProfile(name, password));
        alert('Profile updated successfully!');
    };

    return (
        <div className="container mt-4">
            <h2>Profile Settings</h2>
            <div className="card p-3">
                <div className="mb-3">
                    <label className="form-label">Name</label>
                    <input className="form-control" type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label className="form-label">New Password</label>
                    <input className="form-control" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button className="btn btn-success" onClick={handleUpdate}>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;
