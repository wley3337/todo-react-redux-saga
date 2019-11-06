import React from 'react'
import { AppState } from '../redux/reducer'
import { connect } from 'react-redux'
import { UserType } from '../redux/User.redux/User.types'
import { withRouter } from 'react-router'
import Boards from './Boards';
import * as css from './Dashboard.css';

interface DashboardProps{
    //state 
    user: UserType
}

const Dashboard: React.FC<DashboardProps> = ({user}) => {
    return(
        <div className ={css.body}>
            <div>
                <div className={css.welcome}>Welcome {user.firstName}</div>  
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

export default withRouter(connect(mSTP)(Dashboard));