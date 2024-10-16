import React from "react";
import { mount } from 'marketing/MarketingApp'
import { useHistory } from 'react-router-dom'

const MarketingApp = () => {
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
            }
        })
        history.listen(onParentNavigate)
    }, [])

    return <div ref={marketingRef} />
}

export default MarketingApp