import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { AppState } from '../redux/reducer'
import { Link, RouteComponentProps } from 'react-router-dom'
import { loginFormType } from '../redux/LoginForm.redux/LoginForm.types'
import { History } from 'history'
import * as css from './Login.css';

interface LoginProps extends RouteComponentProps{
    //actions 
    loginUser: (loginForm: loginFormType, history: History) => void
    gridAreaAssignment?: string


}

const Login: React.FC<LoginProps> = ({loginUser, history, gridAreaAssignment}) =>{
    const loginFormInitialState: loginFormType = {username: "", password: ""}
    const [loginForm, setLoginForm] = useState(loginFormInitialState)

    const style = gridAreaAssignment ? { gridArea: gridAreaAssignment} : { }

    return(
        <div className={css.text} style={style}>
            <form 
                onSubmit={(e)=>{ e.preventDefault(); loginUser(loginForm, history) }}
                className={css.form}
            >
                <label className={css.label}>
                    Username
                    <input 
                        className={css.input}  
                        type="text"
                        name="Username"
                        onChange={(e)=> setLoginForm({...loginForm, username: e.target.value})}
                        value={loginForm.username}
                    />
                </label>
                <label className={css.label}>
                    Password
                    <input 
                        className={css.input}  
                        type="text"
                        name="Password"
                        onChange={(e)=> setLoginForm({...loginForm, password: e.target.value})}
                        value={loginForm.password}
                    />
                </label>
                <button className={css.button}>
                    Login
                </button>
            </form>
            <Link to="/create-account" className={css.link}>Create Account</Link>
        </div>
    )
}

const mSTP= ( state: AppState ) =>{
    return{

    }
}

export default connect(mSTP, actions)(Login)