import React from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages'
import WalletPage from './pages/wallet'

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/wallet" component={WalletPage} exact/>
            </Switch>
        </Router>
    )
}

export default App