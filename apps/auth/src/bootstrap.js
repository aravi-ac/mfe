import React from "react"
import ReactDOM from 'react-dom'
import { createMemoryHistory, createBrowserHistory } from 'history'
import App from './app'

// mounting function
const mount = (el, { onNavigate, defaultHistory, intialPathname, onSignIn }) => {
    const history = createMemoryHistory({
        initialEntries: [intialPathname]
    })

    if (onNavigate) {
        history.listen(onNavigate)
    }

    ReactDOM.render(<App onSignIn={onSignIn} history={defaultHistory || history} />, el)

    return {
        onParentNavigate: ({ pathname: nextPathname }) => {
            const { pathname } = history.location
            if (pathname !== nextPathname) {
                history.push(nextPathname)
            }
        }
    }
}

// render element if isolated
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root')

    if (devRoot) {
        mount(devRoot, {
            defaultHistory: createBrowserHistory()
        })
    }
}

export { mount }