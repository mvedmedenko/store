import React from 'react';
import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import s from "./Middleheader.module.css"

const Middleheader = () => {
    return (
        <div className={s.header}>
            <div className={s.inner}>
                <Logo/>
                <Navbar/>
            </div>
        </div>
    );
};

export default Middleheader;