import React from 'react'
import { Route } from 'react-router'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'


const LandingPage: React.FC = () =>{
    return (
        <div>
            <Route exact path="/" component={ Login } />
            <Route exact path="/create-account" component={ CreateAccount } />
        </div>
    )
}

export default LandingPage