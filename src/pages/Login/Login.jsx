import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import "./Login.css";
import Cookies from "js-cookie";

export default function Login() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const  isLoggedIn= Cookies.get('isLogged') || false
    if (isLoggedIn) {
      navigate("/");
    }
  }, []);//  Run only once when the component mounts
  const  isLoggedIn= Cookies.get('isLogged') || false
  if (isLoggedIn) {
    navigate("/");
  }
  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const response = await fetch(
        `http://localhost:5000/users?email=${email}&password=${password}`
      );
      const data = await response.json();
      if (data.length > 0) {
        Cookies.set("isLogged", true);
        navigate("/"); // Navigate to home page
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      console.error("Error during authentication:", err);
      setError("Something went wrong. Please try again later.");
    }finally {
        setLoading(false); // Stop loading after process is complete
      }
  };

  const handleForgotPassword = () => {
    navigate("/forgot-password");
  };

  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">MBook</h3>
          <span className="loginDesc">
            Connect With Friends And The World Around You On MBook
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <TextField
              inputRef={emailRef}
              label="Email"
              type="email"
              required
              fullWidth
              margin="normal"
            />

            <TextField
              inputRef={passwordRef}
              label="Password"
              type={showPassword ? "text" : "password"} // Toggle between text and password
              required
              fullWidth
              margin="normal"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                      aria-label="toggle password visibility"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <button type="submit" className="loginButton" disabled={loading}>
                {loading ? "Logging in..." : "Log In"}
            </button>
            {error && <span className="loginError">{error}</span>}
            {error && (
              <span className="loginForgot" onClick={handleForgotPassword}>
                Forgot Password?
              </span>
            )}
            <button
              type="button"
              className="loginRegisterButton"
              onClick={handleRegister}
            >
              Create a New Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
