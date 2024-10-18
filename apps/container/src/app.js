import React, { lazy, Suspense } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { StylesProvider, createGenerateClassName } from '@material-ui/core'
import Header from './components/Header'
import Progress from './components/Progress'
const MarketingLazy = lazy(() => import('./components/MarketingApp'))
const AuthLazy = lazy(() => import('./components/AuthApp'))


const generateClassName = createGenerateClassName({
    productionPrefix: 'co'
})

const App = () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false)
    return (
        <>
            <BrowserRouter>
                <StylesProvider generateClassName={generateClassName}>
                    <Header onSignOut={() => setIsSignedIn(false)} signedIn={isSignedIn} />
                    <Suspense fallback={<Progress />}>
                        <Switch>
                            <Route path='/auth'>
                                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
                            </Route>
                            <Route path='/' component={MarketingLazy} />
                        </Switch>
                    </Suspense>
                </StylesProvider>
            </BrowserRouter>
        </>
    )
}

export default App