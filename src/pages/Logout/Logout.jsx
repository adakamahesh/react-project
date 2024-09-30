import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the login cookie
    Cookies.remove("isLogged" || "true");

    // Redirect to the login page after logout
    navigate("/login");
  }, []);

  return (
    <div>
      <h2>Logging out...</h2>
    </div>
  );
}