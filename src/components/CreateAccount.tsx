import React, { useState } from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'
import { AppState } from '../redux/reducer'
import { RouteComponentProps } from 'react-router'
import { createUserFormType} from '../redux/CreateUserForm.redux/CreateUserForm.types'
import { History} from 'history'

interface CreateAccountProps extends RouteComponentProps{
    //actions
    createUser: (createUserForm: createUserFormType, history: History) => void
}

const CreateAccount: React.FC<CreateAccountProps> = ({createUser, history}) =>{
    const createUserFormInitialState ={
        firstName: "", lastName: "", username: "", password: ""
    }
    const [createUserForm, setCreateUserForm] = useState(createUserFormInitialState)
    return (
       <form onSubmit={(e)=> {e.preventDefault(); createUser(createUserForm, history) }}>
           <label>
               First Name 
                <input 
                    value={createUserForm.firstName}
                    onChange={(e) => {setCreateUserForm({...createUserForm, firstName: e.target.value})}}
                    placeholder="First Name"
                />
           </label>
           <label>
               Last Name
                <input 
                    value={createUserForm.lastName}
                    onChange={(e) => {setCreateUserForm({...createUserForm, lastName: e.target.value})}}
                    placeholder="Last Name"
                />
           </label>
           <label>
               Username 
                <input 
                    value={createUserForm.username}
                    onChange={(e) => {setCreateUserForm({...createUserForm, username: e.target.value})}}
                    placeholder="Username"
                />
           </label>
           <label>
               Password 
                <input 
                    value={createUserForm.password}
                    onChange={(e) => {setCreateUserForm({...createUserForm, password: e.target.value})}}
                    placeholder="Password"
                />
           </label>
           <input 
                type="submit" 
                value="Create Account"
            />
       </form>
    
    )
}

const mSTP = ( state: AppState ) =>{
    return {

    }
}

export default connect(mSTP, actions)(CreateAccount)