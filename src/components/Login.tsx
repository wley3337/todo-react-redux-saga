import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { AppState } from '../redux/reducer'
import { Link, RouteComponentProps } from 'react-router-dom'
import { loginFormType } from '../redux/LoginForm.redux/LoginForm.types'
import { History } from 'history'


interface LoginProps extends RouteComponentProps{
    //actions 
    loginUser: (loginForm: loginFormType, history: History) => void


}

const Login: React.FC<LoginProps> = ({loginUser, history}) =>{
    const loginFormInitialState: loginFormType = {username: "", password: ""}
    const [loginForm, setLoginForm] = useState(loginFormInitialState)


    return(
        <div>
            <form onSubmit={(e)=>{ e.preventDefault(); loginUser(loginForm, history) }}>
                <label>
                    Username
                    <input 
                        type="text"
                        name="Username"
                        onChange={(e)=> setLoginForm({...loginForm, username: e.target.value})}
                        value={loginForm.username}
                    />
                </label>
                <label>
                    Password
                    <input 
                        type="text"
                        name="Password"
                        onChange={(e)=> setLoginForm({...loginForm, password: e.target.value})}
                        value={loginForm.password}
                    />
                </label>
                <input type="submit" value="Login"/>
            </form>
            <Link to="/create-account">Create Account</Link>
        </div>
    )
}

const mSTP= ( state: AppState ) =>{
    return{

    }
}

export default connect(mSTP, actions)(Login)