import React, {useState} from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { CreateListFormType } from '../redux/HandleCreateList.redux/HandleCreateList.types';
import * as css from './CreateListForm.css';

interface CreateListFormProps{
    //actions 
    handleCreateList: (list: CreateListFormType)=> void
}

const CreateListForm: React.FC<CreateListFormProps> = ({ handleCreateList }) =>{
    const initialListFormState = {
        heading: ""
    }
    const [ listForm, updateListForm ] = useState(initialListFormState)

    return(
        <form className={css.wrapper} onSubmit={e => {e.preventDefault(); handleCreateList(listForm) }}>
            <input 
                value={listForm.heading}
                onChange={ e => updateListForm({...listForm, heading: e.target.value }) }
                placeholder="Name Your List"
            />
            <input type="submit" value="Create List"/>
        </form>
    )
}


export default connect(null, actions)(CreateListForm)