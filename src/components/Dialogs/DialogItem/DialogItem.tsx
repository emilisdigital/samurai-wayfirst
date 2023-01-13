import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './../Dialogs.module.css'

type DialogItem = {
    id: number
    name: string
}

export function DialogItem(props: DialogItem) {
    let path = "/dialogs/" + props.id

    return <div className={s.dialog + " " + s.active}>
        <NavLink to={path}>{props.name}</NavLink>
    </div>
}