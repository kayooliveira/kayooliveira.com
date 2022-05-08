import React from 'react'
import { AuthProvider } from './Contexts/Auth'
import Routes from './Services/Routes'
/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: App component
 *
 */

const App: React.FC = () => {
    return (
        <>
            <AuthProvider>
                <Routes />
            </AuthProvider>
        </>
    )
}

export default App
