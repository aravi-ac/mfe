import React from "react";
import { mount } from 'marketing/MarketingApp'

const MarketingApp = () => {
    const marketingRef = React.useRef(null)

    React.useEffect(() => {
        mount(marketingRef.current)
    })

    return <div ref={marketingRef} />
}

export default MarketingApp