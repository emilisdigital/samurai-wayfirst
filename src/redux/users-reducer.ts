type LocationType = { city: string, country: string }
type PhotosType = { small: string, large: string }
export type UserType = { id: number, photos: PhotosType, followed: boolean, name: string, status: string, location: LocationType }

let initialState = {
    users: [] as UserType[],
    pageSize: 5,
    totalUsersCount: 20657,
    currentPage: 1,
    isFetching: false
}

type initialStateType = typeof initialState

export const usersReducer = (state = initialState, action: ActionsType): initialStateType => {
    switch (action.type) {
        case "FOLLOW": {
            return {...state, users: state.users.map(f => f.id === action.userId ? {...f, followed: true} : f)}
        }
        case "UN-FOLLOW": {
            return {...state, users: state.users.map(u => u.id === action.userId ? {...u, followed: false} : u)}
        }
        case "SET-USER": {
            return {...state, users: [...action.users]}
        }
        case "SET-CURRENT-PAGE": {
            return {...state, currentPage: action.currentPage}
        }
        case "SET-TOTAL-COUNT": {
            return {...state, totalUsersCount: action.totalCount}
        }
        case "TOGGLE-IS-FETCHING": {
            return {...state, isFetching: action.isFetching}
        }
        default:
            return state
    }
    return state
}

type ActionsType = FollowACType | UnFollowACType | SetUsersACType
    | SetCurrentPageType | SetTotalUsersCountACType | ToggleIsFetchingACType

type FollowACType = ReturnType<typeof follow>
export const follow = (userId: number) => {
    return {
        type: "FOLLOW",
        userId
    } as const
}

type UnFollowACType = ReturnType<typeof unFollow>
export const unFollow = (userId: number) => {
    return {
        type: "UN-FOLLOW",
        userId
    } as const
}

type SetUsersACType = ReturnType<typeof setUsers>
export const setUsers = (users: UserType[]) => {
    return {
        type: "SET-USER",
        users
    } as const
}

type SetCurrentPageType = ReturnType<typeof setCurrentPage>
export const setCurrentPage = (currentPage: number) => {
    return {
        type: "SET-CURRENT-PAGE",
        currentPage
    } as const
}

type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export const setTotalUsersCount = (totalCount: number) => {
    return {
        type: "SET-TOTAL-COUNT",
        totalCount
    } as const
}

type ToggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export const toggleIsFetching = (isFetching: boolean) => {
    return {
        type: "TOGGLE-IS-FETCHING",
        isFetching
    } as const
}