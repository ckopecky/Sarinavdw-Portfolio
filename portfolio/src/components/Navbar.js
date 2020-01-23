import React, {useState} from 'react';
import "../index.css";

const Navbar = () => {
    const [ useActive, setActive ] = useState({home: true, contact: false, experiments: false});

    const handleClick = (e) => {
        if(e.target.name === "home") {
            setActive({home: true, contact: false, experiments: false})
        }
        else if(e.target.name === "contact") {
            setActive({home: false, contact: true, experiments: false});
        } 
        else if(e.target.name === "experiments") {
            setActive({home: false, contact: false, experiments: true})
        }

    }

    return (
        <nav className="nav-bar">
            <a href="#" onClick={handleClick} name="home" className={useActive.home ? "nav-link active" : "nav-link"}>Home</a>
            <a href="#" onClick={handleClick} name="contact" className={useActive.contact ? "nav-link active" : "nav-link"}>Contact</a>
            <a href="#" onClick={handleClick} name="experiments" className={useActive.experiments ? "nav-link active" : "nav-link"}>Experiments</a>
        </nav>
    );
};

export default Navbar;