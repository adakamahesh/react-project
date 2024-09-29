import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import './Register.css'; // Include styling

export default function Register() {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const usernameRef = useRef(null);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const username = usernameRef.current.value;

        // Basic validation
        if (!email || !password || !username) {
            setError('Please fill in all the fields');
            return;
        }

        try {
            // Check if the email already exists
            const checkUserResponse = await fetch(`http://localhost:5000/users?email=${email}`);
            const existingUsers = await checkUserResponse.json();

            if (existingUsers.length > 0) {
                setError('Email is already registered');
                return;
            }

            // Register new user (POST request to json-server)
            const response = await fetch('http://localhost:5000/users', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    password,
                    username,
                }),
            });

            if (response.ok) {
                setSuccess('Account created successfully! Redirecting to login...');
                setError('');
                setTimeout(() => navigate('/login'), 2000); // Redirect to login after 2 seconds
            } else {
                setError('Registration failed. Please try again.');
            }
        } catch (err) {
            setError('Something went wrong. Please try again later.');
        }
    };

    return (
        <div className='register'>
            <div className="registerWrapper">
                <h3 className="registerTitle">Create a New Account</h3>
                <form className="registerBox" onSubmit={handleRegister}>
                    <TextField
                        inputRef={usernameRef}
                        placeholder="Username"
                        required
                        className="registerInput"
                        fullWidth
                    />
                    <TextField
                        inputRef={emailRef}
                        type="email"
                        placeholder="Email"
                        required
                        className="registerInput"
                        fullWidth
                    />
                    <TextField
                        inputRef={passwordRef}
                        type={showPassword ? 'text' : 'password'} // Toggle password visibility
                        placeholder="Password"
                        required
                        minLength={6}
                        className="registerInput"
                        fullWidth
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        onClick={() => setShowPassword(prev => !prev)}
                                        edge="end"
                                    >
                                        {showPassword ? <VisibilityOff /> : <Visibility />}
                                    </IconButton>
                                </InputAdornment>
                            ),
                        }}
                    />
                    <button className="registerButton">Sign Up</button>
                    {error && <span className='registerError'>{error}</span>}
                    {success && <span className='registerSuccess'>{success}</span>}
                </form>
                <button className="loginButton" onClick={() => navigate('/login')}>
                    Already have an account? Log In
                </button>
            </div>
        </div>
    );
}