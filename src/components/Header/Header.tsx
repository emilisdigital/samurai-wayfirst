import React from 'react';
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

type HeaderPropsType = {
    isAuth: boolean
    login: string | null
}

export function Header(props: HeaderPropsType) {
    return <header className={s.header}>
        <img src={"https://www.logodesign.net/logo/line-art-house-roof-and-buildings-4485ld.png"}/>

        <div className={s.loginBlock}>
            { props.isAuth
                ? props.login
                : <NavLink to={'/login'}>Login</NavLink>
            }
        </div>
    </header>
}