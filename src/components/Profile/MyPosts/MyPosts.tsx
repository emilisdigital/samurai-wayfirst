import React, {ChangeEvent} from 'react';
import s from './MyPosts.module.css'
import {Post} from "./Post/Post";
import {MyPostsPropsType} from "./MyPostsContainer";

export function MyPosts(props: MyPostsPropsType) {

    let postsElement = props.posts.map(u => <Post message={u.message} likesCount={u.likesCount} key={u.id}/>)

    let newPostElement = React.createRef<HTMLTextAreaElement>()

    const onAddPost = () => {
        props.addPost(props.newPostText)
    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let text = e.currentTarget.value
        props.onPostChange(text)
    }

    return (
        <div className={s.postBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPostElement}
                              onChange={onPostChange}
                              value={props.newPostText}/>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElement}
            </div>
        </div>
    )
}