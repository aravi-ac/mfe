import React from "react";
import { mount } from 'auth/AuthApp'
import { useHistory } from 'react-router-dom'

const AuthApp = ({ onSignIn }) => {
    const marketingRef = React.useRef(null)
    const history = useHistory()

    React.useEffect(() => {
        const { onParentNavigate } = mount(marketingRef.current, {
            intialPathname: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location
                if (pathname !== nextPathname) {
                    history.push(nextPathname)
                }
            },
            onSignIn
        })
        history.listen(onParentNavigate)
    }, [])

    return <div ref={marketingRef} />
}

export default AuthApp