import "./NavBar.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
    const [selected, setSelected] = useState(0);
    const navigate = useNavigate();

    const navHome = () => {
        setSelected(0);
        navigate("/");
    }

    const navRead = () => {
        setSelected(1);
        navigate("/read");
    }

    const navMotivation = () => {
        setSelected(2);
        navigate("/motivation");
    }

    return (<div id="nav-bar">
        <div id="pages">
            <button onClick={navHome} className={"nav-bar-item" + (selected === 0 ? " selected" : "")}>Petition</button>
            <button onClick={navRead} className={"nav-bar-item" + (selected === 1 ? " selected" : "")}>Read More</button>
            <button onClick={navMotivation} className={"nav-bar-item" + (selected === 2 ? " selected" : "")}>Motivation</button>
        </div>
    </div>);
}

export default NavBar;