import {addPostActionCreator, profileReducer, setUserProfile, UpdateNewPostTextActionCreator} from "./profile-reducer";
import {messagesReducer, sendMessageActionCreator, updateNewMessageActionCreator} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";

type PostType = {
    id: number
    message: string
    likesCount: number
}
type DialogType = {
    id: number
    name: string
}
type MessageType = {
    id: number
    message: string
}
export type ProfilePageType = {
    posts: Array<PostType>
    newPostText: string
}
type MessagesPageType = {
    dialogs: Array<DialogType>
    messages: Array<MessageType>
    newMessageBody: string
}
export type SidebarType = {}
type RootStateType = {
    profilePage: ProfilePageType
    messagesPage: MessagesPageType
    sidebar: SidebarType
}
type StoreType = {
    _state: RootStateType
    getState: () => RootStateType
    _callSubscriber: (_state: RootStateType) => void
    // addPost: (postText: string) => void
    // updateNewPostText: (newText: string) => void
    subscribe: (observer: () => void) => void
    dispatch: (action: ActionsType) => void
}

export type ActionsType =
    // Profile
    ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostTextActionCreator>
    | ReturnType<typeof addPostActionCreator>
    | ReturnType<typeof UpdateNewPostTextActionCreator>
    | ReturnType<typeof setUserProfile>
    // Messages
    | ReturnType<typeof updateNewMessageActionCreator>
    | ReturnType<typeof sendMessageActionCreator>

// export let store: StoreType = {
//     _state: {
//         profilePage: {
//             posts: [
//                 {id: 1, message: "Hi, how are you?", likesCount: 12},
//                 {id: 2, message: "It's my first post", likesCount: 23},
//                 {id: 3, message: "It's my first post", likesCount: 16},
//                 {id: 4, message: "It's my first post", likesCount: 14}
//             ],
//             newPostText: ""
//         },
//         messagesPage: {
//             dialogs: [
//                 {id: 1, name: "Dimych"},
//                 {id: 2, name: "Andrey"},
//                 {id: 3, name: "Sveta"},
//                 {id: 4, name: "Sasha"},
//                 {id: 5, name: "Viktor"},
//                 {id: 6, name: "Valera"}
//             ],
//             messages: [
//                 {id: 1, message: "Hi"},
//                 {id: 2, message: "How is your it-kamasutra?"},
//                 {id: 3, message: "Yo"}
//             ],
//             newMessageBody: ""
//         },
//         sidebar: {}
//     },
//     _callSubscriber() {
//         console.log('state changed')
//     },
//
//     getState() {
//         return this._state;
//     },
//     subscribe(observer: () => void) {
//         this._callSubscriber = observer
//     },
//
//     dispatch(action) {
//
//         this._state.profilePage = profileReducer(this._state.profilePage, action)
//         this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
//         this._state.sidebar = sidebarReducer(this._state.sidebar, action)
//
//         this._callSubscriber(this._state)
//
//         return
//     }
// }