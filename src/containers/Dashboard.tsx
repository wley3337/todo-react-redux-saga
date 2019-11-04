import React from 'react'
import { AppState } from '../redux/reducer'
import { connect } from 'react-redux'
import { UserType } from '../redux/User.redux/User.types'
import HandleAutoLogin from '../components/HandleAutoLogin'
import { withRouter, Route } from 'react-router'
import Boards from './Boards';
import * as css from './Dashboard.css';

interface DashboardProps{
    //state 
    user: UserType
}

const Dashboard: React.FC<DashboardProps> = ({user}) => {
    console.log("user ", user)
    return(
        <div className ={css.body}>
            {user.firstName === "" ? <Route path ="/" component={HandleAutoLogin} /> : 
            
            <React.Fragment>
                <div>
                    <div className={css.welcome}>Welcome {user.firstName}</div>  
                    <span className={css.board}>
                    Your Boards:
                    </span>
                </div>
                <div>
                    <Boards /> 
                </div>
            </React.Fragment>            
            }
           
        </div>
    )
}

const mSTP = ( state: AppState ) =>{
    return{user: state.user}
}

export default withRouter(connect(mSTP)(Dashboard));