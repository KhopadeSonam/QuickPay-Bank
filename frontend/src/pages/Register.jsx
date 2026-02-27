import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import authService from '../services/authService';

const Register = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        country: '',
        accountType: 'Savings',
        password: '',
        confirmPassword: ''
    });

    const [message, setMessage] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validate = () => {
        let tempErrors = {};
        if (!formData.firstName) tempErrors.firstName = "First name is required";
        if (!formData.lastName) tempErrors.lastName = "Last name is required";
        if (!formData.email) {
            tempErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Email is invalid";
        }
        if (!formData.phone) tempErrors.phone = "Phone number is required";
        if (!formData.country) tempErrors.country = "Country is required";
        if (formData.password.length < 6) tempErrors.password = "Password must be at least 6 characters";
        if (formData.password !== formData.confirmPassword) {
            tempErrors.confirmPassword = "Passwords do not match";
        }

        setErrors(tempErrors);
        return Object.keys(tempErrors).length === 0;
    };

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData(prev => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validate()) return;

        setLoading(true);
        setMessage("");
        setError("");

        try {
            const { confirmPassword, ...registerData } = formData;
            const response = await authService.register(registerData);

            setMessage("Account created successfully");
            setError("");
            setFormData({
                firstName: '', lastName: '', phone: '', email: '',
                country: '', accountType: 'Savings', password: '', confirmPassword: ''
            });
        } catch (err) {
            setError(err.message || "Email already exists");
            setMessage("");
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
                        <h2 className="title">Create an account</h2>
                        <p className="subtitle">Create your account and manage your finances with ease.</p>
                    </header>

                    {message && <div className="success-alert">{message}</div>}
                    {error && <div className="error-alert">{error}</div>}

                    <div className="form-card">
                        <form onSubmit={handleSubmit}>
                            <div className="form-grid">
                                <div className="input-field">
                                    <input type="text" id="firstName" placeholder="First Name" value={formData.firstName} onChange={handleChange} />
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>
                                <div className="input-field">
                                    <input type="text" id="lastName" placeholder="Last Name" value={formData.lastName} onChange={handleChange} />
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                </div>
                                <div className="input-field">
                                    <input type="email" id="email" placeholder="Email Address" value={formData.email} onChange={handleChange} />
                                    {errors.email && <span className="error-message">{errors.email}</span>}
                                </div>
                                <div className="input-field">
                                    <input type="tel" id="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} />
                                    {errors.phone && <span className="error-message">{errors.phone}</span>}
                                </div>
                                <div className="input-field">
                                    <input type="text" id="country" placeholder="Country" value={formData.country} onChange={handleChange} />
                                    {errors.country && <span className="error-message">{errors.country}</span>}
                                </div>
                                <div className="input-field">
                                    <select id="accountType" value={formData.accountType} onChange={handleChange}>
                                        <option value="Savings">Savings Account</option>
                                        <option value="Current">Current Account</option>
                                        <option value="Business">Business Account</option>
                                    </select>
                                </div>
                                <div className="input-field">
                                    <input type="password" id="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                                    {errors.password && <span className="error-message">{errors.password}</span>}
                                </div>
                                <div className="input-field">
                                    <input type="password" id="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                                    {errors.confirmPassword && <span className="error-message">{errors.confirmPassword}</span>}
                                </div>
                            </div>

                            <div className="checkbox-section">
                                <input type="checkbox" id="terms" required />
                                <label htmlFor="terms">I agree to the Terms of Service and Privacy Policy</label>
                            </div>

                            <div className="button-section">
                                <button type="submit" className="btn-primary" disabled={loading}>
                                    {loading ? 'Processing...' : 'Create Account'}
                                </button>
                                <div className="login-link">
                                    Already have an account? <Link to="/login">Log in</Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;
