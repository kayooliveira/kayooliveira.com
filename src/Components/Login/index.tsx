import React from 'react'
import { AuthActions } from '../../Contexts/Auth'
import useAuth from '../../Hooks/useAuth'
import Firebase from '../../Services/Firebase'
import { Notify } from '../../Services/Notify'
import * as C from './styles'
interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
    const { state, dispatch } = useAuth()
    console.log('STATE', state)

    return (
        <C.LoginContainer>
            {state.user.displayName && state.user.photoURL && (
                <>
                    <img
                        alt="user"
                        src={state.user.photoURL}
                        style={{ borderRadius: '100%' }}
                    />
                    <h1 style={{ color: '#FFF' }}>
                        {' '}
                        Olá, {state.user.displayName}
                    </h1>
                </>
            )}

            <button
                type="submit"
                onClick={async e => {
                    e.preventDefault()
                    const user = await Firebase.googleAuth()
                    if (!user) {
                        return Notify.error('Falha ao fazer login')
                    }
                    dispatch({
                        type: AuthActions.setUser,
                        payload: {
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                            photoURL: user.photoURL,
                            emailVerified: user.emailVerified
                        }
                    })
                    dispatch({
                        type: AuthActions.setIsAuthenticated,
                        payload: true
                    })
                }}
            >
                Login com google
            </button>
            {/* <C.LoginForm>
                <C.Label htmlFor="email">Email</C.Label>
                <C.Input
                    type="text"
                    name="email"
                    id="email"
                    placeholder="mail@example.com"
                />
                <C.Label htmlFor="password">Senha</C.Label>
                <C.Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="********"
                />
            </C.LoginForm> */}
        </C.LoginContainer>
    )
}

export default Login
