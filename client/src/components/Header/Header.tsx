import React from 'react';
import s from "./Header.module.css"
import Topheader from "./Topheader/Topheader";
import Middleheader from "./Middleheader/Middleheader";
import Bottomheader from "./Bottomheader/Bottomheader";
const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.inner}>
                <Topheader/>
                <Middleheader/>
                <Bottomheader/>
            </div>
        </div>
    );
};

export default Header;