import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFinanceData } from '../redux/actions/financeActions';
import { logout } from '../redux/actions/authActions';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { balance, transactions, notifications } = useSelector((state) => state.finance);

    useEffect(() => {
        dispatch(fetchFinanceData());
    }, [dispatch]);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/');
    };

    return (
        <div className="container mt-4">
            <h2>Dashboard</h2>
            <div className="card p-3">
                <h4>Account Balance: <span className="text-success">${balance}</span></h4>
                <h5 className="mt-3">Recent Transactions</h5>
                <ul className="list-group">
                    {transactions.map((tx) => (
                        <li key={tx.id} className="list-group-item">{tx.date} - {tx.type}: ${tx.amount}</li>
                    ))}
                </ul>
                <h5 className="mt-3">Notifications</h5>
                <ul className="list-group">
                    {notifications.map((note, index) => <li key={index} className="list-group-item">{note}</li>)}
                </ul>
                <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    );
};

export default Dashboard;
