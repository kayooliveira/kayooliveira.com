import { initializeApp } from 'firebase/app'
import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'
import { Notify } from '../Notify'
import config from './config'

const app = initializeApp(config)

export default {
    googleAuth: async () => {
        const provider = new GoogleAuthProvider()
        const auth = getAuth()
        const { user } = await signInWithPopup(auth, provider)
        if (!user) {
            Notify.error('Google Auth Error')
            return
        }
        return user
    }
}
