import React from 'react';
import s from './Post.module.css'

type PostPropsType = {
    message: string
    likesCount: number
}

export function Post(props: PostPropsType) {
    return (
        <div className={s.item}>
            <img src="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"/>
            {props.message}
            <div>
                likes {props.likesCount}
            </div>
        </div>
    )
}