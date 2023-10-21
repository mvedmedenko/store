import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Navbar.module.css"
const Navbar = () => {
    return (
        <div>
            <nav>
                <ul className={s.list}>
                    <li className={s.item}><NavLink to="/">Home</NavLink></li>
                    <li className={s.item}><NavLink to="/new">New&Featured</NavLink></li>
                    <li className={s.item}><NavLink to="/men">Men</NavLink></li>
                    <li className={s.item}><NavLink to="/women">Women</NavLink></li>
                    <li className={s.item}><NavLink to="/kids">Kids</NavLink></li>
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