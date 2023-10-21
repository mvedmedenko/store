import React from 'react';
import s from "./Bottomheader.module.css"
import {NavLink} from "react-router-dom";

const Bottomheader = () => {
    return (
        <div className={s.header}>
            <div className={s.title}>Shop All New Arrivals</div>
            <div className={s.subtitle}><NavLink to="/all">Shop</NavLink></div>
        </div>
    );
};

export default Bottomheader;