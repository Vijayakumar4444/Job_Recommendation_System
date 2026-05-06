import { useNavigate } from "react-router-dom";
import "./navbar.css";

function NavBar() {
    const navigate = useNavigate();
    return (
        <div className="navbar">

            <div className="nav-left">
                <p className="title">Job Recommendation System</p>
                <button className="btn" onClick={() => navigate("/jobs")}>Explore</button>
            </div>

            <div className="nav-right">
                <button className="abtn" onClick={() => navigate("/jobs")}>Admin</button>
                <button className="btn" onClick={() => navigate("/jobs")}>Log In</button>
                <button className="btn" onClick={() => navigate("/jobs")}>Sign Up</button>
            </div>

        </div>
    );
}

export default NavBar