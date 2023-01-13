import {combineReducers, createStore} from "redux";
import {messagesReducer} from "./messages-reducer";
import {sidebarReducer} from "./sidebar-reducer";
import {profileReducer} from "./profile-reducer";
import {usersReducer} from "./users-reducer";
import {authReducer} from "./auth-reducer";



let rootReducer = combineReducers({
    profilePage: profileReducer,
    messagesPage: messagesReducer,
    userPage: usersReducer,
    sidebar: sidebarReducer,
    auth: authReducer
})

export let store = createStore(rootReducer);

export type RootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store