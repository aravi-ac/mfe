import React from "react"
import ReactDOM from 'react-dom'
import App from './app'

// mounting function
const mount = (el) => {
    ReactDOM.render(
        <App />
        , el)
}

// render element if isolated
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_marketing-dev-root')

    if (devRoot) {
        mount(devRoot)
    }
}

export { mount }