import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const Login = () => {
    const [credentials, setCredentials] = useState({ email: '', password: '' });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { id, value } = e.target;
        setCredentials(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");

        try {
            const response = await authService.login(credentials);
            localStorage.setItem("token", response.token);
            localStorage.setItem(
                "user",
                JSON.stringify({
                    firstName: response.firstName,
                    lastName: response.lastName,
                    email: response.email
                })
            );
            navigate("/dashboard");
        } catch (err) {
            setError(err.message || "Invalid credentials");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <section className="auth-sidebar">
                <div className="sidebar-content">
                    <h1 className="brand-logo">QuickPay Bank</h1>
                    <p className="tagline">Secure. Simple. Smart.</p>
                </div>
            </section>

            <main className="auth-content">
                <div className="content-wrapper">
                    <header className="header-area">
                        <h2 className="title">Login to your account</h2>
                        <p className="subtitle">Manage your finances securely and easily.</p>
                    </header>

                    {error && <div className="error-alert">{error}</div>}

                    <div className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
                                <div className="input-field">
                                    <input type="email" id="email" placeholder="Email Address" value={credentials.email} onChange={handleChange} required />
                                </div>
                                <div className="input-field">
                                    <input type="password" id="password" placeholder="Password" value={credentials.password} onChange={handleChange} required />
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', marginTop: '10px' }}>
                                <Link to="/forgot-password" style={{ fontSize: '14px', color: '#2F5BEA' }}>Forgot password?</Link>
                            </div>

                            <div className="button-section">
                                <button type="submit" className="btn-primary" disabled={loading}>
                                    {loading ? 'Signing In...' : 'Sign In'}
                                </button>
                                <div className="login-link">
                                    Don't have an account? <Link to="/register">Create Account</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;
