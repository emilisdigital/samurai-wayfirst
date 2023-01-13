import React from 'react';
import s from './Dialogs.module.css'
import {sendMessageActionCreator, updateNewMessageActionCreator} from "../../redux/messages-reducer";
import {connect} from "react-redux";
import {Dialogs} from "./Dialogs";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/redux-store";

let mapStateProps = (state: RootStateType) => {
    console.log(state.messagesPage)
    return {
        messagePage: state.messagesPage
    }
}
let mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        sendMessage: () => {
            dispatch(sendMessageActionCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(updateNewMessageActionCreator(body))
        }
    }
}

export const DialogsContainer = connect(mapStateProps,mapDispatchToProps)(Dialogs);