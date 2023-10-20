import React from 'react';
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import s from "./Header.module.css"
const Header = () => {
    return (
        <div>
            <div className={s.wrapper}>
                <Logo/>
                <Navbar/>
            </div>
        </div>
    );
};

export default Header;