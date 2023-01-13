
let initialState = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false
}

type initialStateType = { // typeof initialState
    data: {
        id: number | null,
        email: string | null,
        login: string | null
    }
    isAuth: boolean
}

export const authReducer = (state: initialStateType = initialState, action: ActionsType): initialStateType => {
    switch(action.type) {
        case "SET_USER_DATA":
            return {
                ...state,
                data: {...action.data},
                isAuth: true
            }
    }
    return state
}

type ActionsType = NameType

type NameType = ReturnType<typeof setAuthUserData>
// userId, email, login ////////////////////////////////////////////////////////////!!!
export const setAuthUserData = (id: number, email: string, login: string) => ({
    type: "SET_USER_DATA",
    data: {id, email, login}
} as const)