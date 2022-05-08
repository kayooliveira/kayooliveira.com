import React from 'react'

type State = {
    isAuthenticated: boolean
    user: {
        uid: string
        email: string
        displayName: string
        photoURL: string
        emailVerified: boolean
    }
}

type AuthContextType = {
    state: State
    dispatch: React.Dispatch<Action>
}

const initialState: State = {
    isAuthenticated: false,
    user: {
        uid: '',
        email: '',
        displayName: '',
        photoURL: '',
        emailVerified: false
    }
}

export enum AuthActions {
    setUserUid,
    setUserEmail,
    setUserDisplayName,
    setUserPhotoURL,
    setUserEmailVerified,
    setIsAuthenticated,
    setUser,
    reset
}

type Action = {
    type: AuthActions
    payload: any
}

export const AuthContext = React.createContext<AuthContextType | undefined>(
    undefined
)

const AuthReducer = (state: State, action: Action) => {
    switch (action.type) {
        case AuthActions.setUserUid:
            return {
                ...state,
                user: {
                    ...state.user,
                    uid: action.payload
                }
            }
        case AuthActions.setUserEmail:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            }
        case AuthActions.setUserDisplayName:
            return {
                ...state,
                user: {
                    ...state.user,
                    displayName: action.payload
                }
            }
        case AuthActions.setUserPhotoURL:
            return {
                ...state,
                user: {
                    ...state.user,
                    photoURL: action.payload
                }
            }
        case AuthActions.setUserEmailVerified:
            return {
                ...state,
                user: {
                    ...state.user,
                    emailVerified: action.payload
                }
            }
        case AuthActions.setIsAuthenticated:
            return {
                ...state,
                isAuthenticated: action.payload
            }
        case AuthActions.setUser:
            return {
                ...state,
                user: {
                    ...state.user,
                    uid: action.payload.uid,
                    email: action.payload.email,
                    displayName: action.payload.displayName,
                    photoURL: action.payload.photoURL,
                    emailVerified: action.payload.emailVerified
                }
            }
        case AuthActions.reset:
            return initialState
        default:
            return state
    }
}

export const AuthProvider: React.FC = ({ children }) => {
    const [state, dispatch] = React.useReducer(AuthReducer, initialState)

    const value = { state, dispatch }
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
