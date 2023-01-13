import React from 'react';
import s from './Profile.module.css'
import {ProfileInfo, ProfileType} from "./ProfileInfo/ProfileInfo";
import {MyPostsContainer} from "./MyPosts/MyPostsContainer";



type ProfilePropsType = {
    profile: ProfileType
}

export function Profile(props: ProfilePropsType) {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}