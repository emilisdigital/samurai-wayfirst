import {PostType} from "../components/Profile/MyPosts/MyPostsContainer";
import {ProfileType} from "../components/Profile/ProfileInfo/ProfileInfo";

let initialState: initialStateType = {
    posts: [
        {id: 1, message: "Hi, how are you?", likesCount: 12},
        {id: 2, message: "It's my first post", likesCount: 23},
        {id: 3, message: "It's my first post", likesCount: 16},
        {id: 4, message: "It's my first post", likesCount: 14}
    ],
    newPostText: "",
    profile: null
}

type initialStateType = {
    posts: Array<PostType>
    newPostText: string
    profile: ProfileType
}


export const profileReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "ADD-POST":
            const newPost: PostType = {
                id: new Date().getTime(),
                message: action.postText,
                likesCount: 0
            }
            // state.posts.push(newPost)
            state.newPostText = ""
            return {...state, posts: [...state.posts, newPost]}
        case "UPDATE-NEW-POST-TEXT":
            return {...state, newPostText: action.newText}
        case "SET_USER_PROFILE":
            return {...state, profile: action.profile}
        default:
            return state
    }

    return state
}

type ActionsType = addPostActionCreatorType | UpdateNewPostTextActionCreatorType | setUserProfileType

type addPostActionCreatorType = ReturnType<typeof addPostActionCreator>
type UpdateNewPostTextActionCreatorType = ReturnType<typeof UpdateNewPostTextActionCreator>
type setUserProfileType = ReturnType<typeof setUserProfile>

export const addPostActionCreator = (postText: string) => ({type: "ADD-POST", postText} as const)
export const UpdateNewPostTextActionCreator = (newText: string) => ({type: "UPDATE-NEW-POST-TEXT", newText} as const)
export const setUserProfile = (profile: ProfileType) => ({type: "SET_USER_PROFILE", profile} as const)


