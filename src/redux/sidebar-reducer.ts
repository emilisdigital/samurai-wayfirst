
let initialState = {

}

type initialStateType = typeof initialState

export const sidebarReducer = (state = initialState, action: ActionsType): initialStateType => {
    // @ts-ignore
    switch(action.type) {
        case "":
            return {}
    }
    return state
}

type ActionsType = {}