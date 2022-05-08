import React from 'react'
import Index from '../../Components/Index'
import Login from '../../Components/Login'
import Main from '../../Components/Main'
/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Index page
 *
 */

const IndexPage: React.FC = () => {
    return (
        <>
            <Index />
            <Main />
            {/* <Login /> */}
        </>
    )
}

export default IndexPage
