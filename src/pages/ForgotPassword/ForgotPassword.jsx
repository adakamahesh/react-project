import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css'; // Include your custom styles

export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();  // Initialize useNavigate hook

    const handleForgotPassword = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/forgot-password', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });

            if (response.ok) {
                setMessage('Password reset link sent! Redirecting to login...');

                // Optional: Delay for 3 seconds then navigate to login page
                setTimeout(() => {
                    navigate('/login'); // Redirect to login page after success
                }, 3000);
            } else {
                setMessage('Failed to send password reset link. Please try again.');
            }
        } catch (error) {
            setMessage('Something went wrong. Please try again later.');
        }
    };

    const handleLoginRedirect = () => {
        navigate('/login'); // Redirect to login page when button clicked
    };

    return (
        <div className="forgotPassword">
            <div className="forgotPasswordWrapper">
                <h3 className="forgotPasswordTitle">Forgot Password</h3>
                <form className="forgotPasswordBox" onSubmit={handleForgotPassword}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="forgotPasswordInput"
                    />
                    <button type="submit" className="forgotPasswordButton">
                        Send Reset Link
                    </button>
                </form>
                {message && <span className="forgotPasswordMessage">{message}</span>}

                {/* Add the Login button below the form */}
                <button 
                    className="loginButton" 
                    onClick={handleLoginRedirect} // Navigate to login page
                >
                    Back to Login
                </button>
            </div>
        </div>
    );
}