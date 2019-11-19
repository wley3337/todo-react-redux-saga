import React from 'react'
import { AppState } from '../redux/reducer'
import { connect } from 'react-redux'
import { UserType } from '../redux/User.redux/User.types'
import { withRouter, Redirect } from 'react-router'
import { Link } from 'react-router-dom'
import * as actions from '../redux/actions'
import Boards from './Boards';
import * as css from './Dashboard.css';

interface DashboardProps{
    //state 
    user: UserType
    //actions 
    logout: () => void
}

const Dashboard: React.FC<DashboardProps> = ({user, logout}) => {
    return(
        <div className ={css.body}>
            {localStorage.getItem('ToDo-token') ? null : <Redirect to="/" /> }
            <div>
                <div >
                   <h1 className={css.welcome}>Welcome {user.firstName}</h1>
                    <button onClick={logout} className={css.button} >
                        <Link to="/" >Logout</Link>
                    </button>
                </div>  
                <span className={css.board}>
                    Your Boards:
                </span>
            </div>
            <div>
                <Boards /> 
            </div>
        </div>
    )
}

const mSTP = ( state: AppState ) =>{
    return{user: state.user}
}

export default withRouter(connect(mSTP, actions)(Dashboard));