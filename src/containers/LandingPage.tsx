import React from 'react'
import { Route } from 'react-router'
import Login from '../components/Login'
import CreateAccount from '../components/CreateAccount'
import * as css from './LandingPage.css'

const LandingPage: React.FC = () =>{
    return (
        <div className={css.grid}>
            <Route exact path="/" render={(props) => <Login {...props} gridAreaAssignment="form"/> } />
            <Route exact path="/create-account" render={(props) => <CreateAccount {...props} gridAreaAssignment="form"/>} />
        </div>
    )
}

export default LandingPage