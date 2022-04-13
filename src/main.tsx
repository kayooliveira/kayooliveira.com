import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { cssGlobal } from './Services/Styled'

/**
 *
 * @version 0.0.1
 *
 * @author Kayo Oliveira
 *
 * Description: Main component
 *
 */

ReactDOM.render(
    <React.StrictMode>
        {cssGlobal()}
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
