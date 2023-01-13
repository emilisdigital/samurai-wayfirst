import React, {ChangeEvent} from 'react';
import s from './Dialogs.module.css'
import {DialogItem} from "./DialogItem/DialogItem";
import {Message} from "./Message/Message";
import {} from "../../redux/store";
import {messagesStateType} from "../../redux/messages-reducer";

type DialogsPropsType = {
    messagePage: messagesStateType
    sendMessage: () => void
    updateNewMessageBody: (body: string) => void
}

export function Dialogs(props: DialogsPropsType) {
    const messagesPage = props.messagePage
    let dialogsElements = props.messagePage.dialogs.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id}/>)
    let messagesElements = messagesPage.messages.map(u => <Message message={u.message} key={u.id}/>)
    let newMessageBody = messagesPage.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage()
    }
    let onNewMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let body = e.target.value
        props.updateNewMessageBody(body)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div><textarea value={newMessageBody}
                                   onChange={onNewMessageChange}
                                   placeholder="Enter your message"></textarea></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}