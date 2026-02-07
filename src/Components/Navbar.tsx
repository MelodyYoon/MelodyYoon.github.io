import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
    const navigate = useNavigate();
    return (
        <div className="NavBar">
            <button className="NavButtons" onClick={() => navigate('/')}>Home</button>
            <button className="NavButtons" onClick={() => navigate('/research')}>Research</button>
            {/* <button className="NavButtons" onClick={() => navigate('/projects')}>Projects</button> */}
        </div> 
    );
} export default Navbar;