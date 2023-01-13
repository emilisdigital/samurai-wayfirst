import React from "react";
import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import {UserType} from "../../redux/users-reducer";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    users: UserType[]
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    pageSize: number
    totalUsersCount: number
    currentPage: number
    onPageChanged: (num: number) => void
}

export const Users = (props: UsersPropsType) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }
    return <div>
        <div className={styles.divUsers}>
            {pages.map(p => {
                let selPage = props.currentPage === p ? styles.selectedPage : styles.unSelectedPage
                let onClickPageChanged = () => props.onPageChanged(p)
                return <span className={selPage} onClick={onClickPageChanged}>{p}</span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + u.id}>
                             <img src={u.photos.small ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => props.unFollow(u.id)}>UnFollow</button>
                            : <button onClick={() => props.follow(u.id)}>Follow</button>}
                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}