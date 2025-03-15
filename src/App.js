import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import Profile from './components/Profile';
import PrivateRoute from './components/PrivateRoute';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
    return (
        <Provider store={store}>
            <Router>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container">
                        <Link className="navbar-brand" to="/">FinanceApp</Link>
                        <div>
                            <Link className="btn btn-outline-primary mx-2" to="/dashboard">Dashboard</Link>
                            <Link className="btn btn-outline-secondary" to="/profile">Profile</Link>
                        </div>
                    </div>
                </nav>

                <div className="container mt-3">
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
                        <Route path="/profile" element={<PrivateRoute><Profile /></PrivateRoute>} />
                    </Routes>
                </div>
            </Router>
        </Provider>
    );
}

export default App;
