import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { History } from 'history'
import { RouteComponentProps } from 'react-router'

interface HandleAutoLoginProps extends RouteComponentProps{
    //actions 
    handleAutoLogin: (history: History)=>void
    history: History
}

const HandleAutoLogin: React.FC<HandleAutoLoginProps> = ({history, handleAutoLogin}) => {
    handleAutoLogin(history)
    return( 
        <div>
            Logging in
        </div>
    )
}


export default connect(null, actions)(HandleAutoLogin)