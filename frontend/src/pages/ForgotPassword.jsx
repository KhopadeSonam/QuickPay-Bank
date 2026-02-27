import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import authService from '../services/authService';

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(1); // 1: Email check, 2: Reset password
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleEmailSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setMessage("");

        try {
            await authService.forgotPassword(email);
            setStep(2);
            setMessage("Email verified. You can now reset your password.");
        } catch (err) {
            setError(err.message || "User not found");
        } finally {
            setLoading(false);
        }
    };

    const handleResetSubmit = async (e) => {
        e.preventDefault();
        if (newPassword !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        setError("");
        setMessage("");

        try {
            await authService.resetPassword({ email, newPassword });
            setMessage("Password updated successfully. Redirecting to login...");
            setTimeout(() => navigate("/login"), 3000);
        } catch (err) {
            setError(err.message || "Failed to reset password");
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
                        <h2 className="title">{step === 1 ? "Forgot Password" : "Reset Password"}</h2>
                        <p className="subtitle">
                            {step === 1
                                ? "Enter your email to verify your account."
                                : "Choose a new strong password for your account."}
                        </p>
                    </header>

                    {message && <div className="success-alert">{message}</div>}
                    {error && <div className="error-alert">{error}</div>}

                    <div className="form-card">
                        {step === 1 ? (
                            <form onSubmit={handleEmailSubmit}>
                                <div className="input-field">
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="button-section">
                                    <button type="submit" className="btn-primary" disabled={loading}>
                                        {loading ? 'Verifying...' : 'Verify Email'}
                                    </button>
                                    <div className="login-link">
                                        Back to <Link to="/login">Login</Link>
                                    </div>
                                </div>
                            </form>
                        ) : (
                            <form onSubmit={handleResetSubmit}>
                                <div className="form-grid" style={{ gridTemplateColumns: '1fr' }}>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            placeholder="New Password"
                                            value={newPassword}
                                            onChange={(e) => setNewPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                    <div className="input-field">
                                        <input
                                            type="password"
                                            placeholder="Confirm New Password"
                                            value={confirmPassword}
                                            onChange={(e) => setConfirmPassword(e.target.value)}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="button-section">
                                    <button type="submit" className="btn-primary" disabled={loading}>
                                        {loading ? 'Updating...' : 'Update Password'}
                                    </button>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </main>
        </div>
    );
};

export default ForgotPassword;
