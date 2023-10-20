import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/new">New&Featured</NavLink></li>
                    <li><NavLink to="/men">Men</NavLink></li>
                    <li><NavLink to="/women">Women</NavLink></li>
                    <li><NavLink to="/kids">Kids</NavLink></li>
                </ul>
            </nav>
        </div>
    );
};

// <NavLink to="/home">Home</NavLink>
// <NavLink to="/new">New&Featured</NavLink>
// <NavLink to="/men">Men</NavLink>
// <NavLink to="/women">Women</NavLink>
// <NavLink to="/kids">Kids</NavLink>
export default Navbar;