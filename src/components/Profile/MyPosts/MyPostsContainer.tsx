import React from 'react';
import {addPostActionCreator, UpdateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {MyPosts} from "./MyPosts";
import {connect} from "react-redux";
import {RootStateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

export type PostType = {
    id: number
    message: string
    likesCount: number
}

type MapStatePropsType = {
    posts: Array<PostType>
    newPostText: string
}
type MapDispatchPropsType = {
    addPost: (newText: string) => void
    onPostChange: (text: string) => void
}
export type MyPostsPropsType = MapStatePropsType & MapDispatchPropsType

const mapStateProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        onPostChange: (text: string) => {
            dispatch(UpdateNewPostTextActionCreator(text))
        },
        addPost: (newText: string) => {
            dispatch(addPostActionCreator(newText))
        }
    }
}
export const MyPostsContainer = connect(mapStateProps,mapDispatchToProps)(MyPosts)