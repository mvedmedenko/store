import React from 'react';
import {NavLink} from "react-router-dom";
import logo from "../../../../common/images/logo.svg"
import s from "./Logo.module.css"

const Logo = () => {
    return (
        <div className={s.logo}>
            <NavLink to="/"><img alt="LOGO" src={logo} width="58px" height="20px"/></NavLink>
        </div>
    );
};

export default Logo;