import React from 'react';
import {NavLink} from "react-router-dom";
import s from "./Login.module.css"

const Login = () => {
    return (
        <div>
            <ul className={s.list}>
                <li className={s.item}><NavLink to="/signup">Sign Up</NavLink></li>
                <li className={s.item}><NavLink to="/signin">Sign In</NavLink></li>
            </ul>
        </div>
    );
};

export default Login;