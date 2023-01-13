export type DialogType = {
    id: number
    name: string
}
export type MessageType = {
    id: number
    message: string
}

let initialState = {
    dialogs: [
        {id: 1, name: "Dimych"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sveta"},
        {id: 4, name: "Sasha"},
        {id: 5, name: "Viktor"},
        {id: 6, name: "Valera"}
    ] as Array<DialogType>,
    messages: [
        {id: 1, message: "Hi"},
        {id: 2, message: "How is your it-kamasutra?"},
        {id: 3, message: "Yo"}
    ] as Array<MessageType>,
    newMessageBody: ""
}
export type messagesStateType = typeof initialState

export const messagesReducer = (state = initialState, action: ActionsType): messagesStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            // state.newMessageBody = action.body
            return {...state, newMessageBody: action.body}
        case "SEND-MESSAGE":
            let body = state.newMessageBody
            state.newMessageBody = ""
            // state.messages.push({id: 4, message: body})
            return {...state, messages: [...state.messages, {id: 4, message: body}]}
        default:
            return state
    }
}

type ActionsType = UpdateNewMessageActionCreatorType | SendMessageActionCreatorType

type UpdateNewMessageActionCreatorType = ReturnType<typeof updateNewMessageActionCreator>
type SendMessageActionCreatorType = ReturnType<typeof sendMessageActionCreator>

export const updateNewMessageActionCreator = (body: string) => ({type: "UPDATE-NEW-MESSAGE-BODY", body} as const)
export const sendMessageActionCreator = () => ({type: "SEND-MESSAGE"} as const)
