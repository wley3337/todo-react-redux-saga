import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../redux/actions';
import { AppState } from '../redux/reducer';
import { ListType } from '../redux/Lists.redux/Lists.types';
import ListDetail from '../components/ListDetail';
import CreateListForm from '../components/CreateListForm';
import * as css from './Boards.css';

interface BoardsProps{
    //state
    lists: Array<ListType>
}

const Boards: React.FC<BoardsProps> = ({ lists }) =>{
    return(
        <div className={css.wrapper}>
            {lists.map(list => <ListDetail key={list.id} list={list}/>)}
            <CreateListForm />
        </div>
    )
}

const mSTP= ( state: AppState ) =>{
    return{
        lists: state.lists
    }
}

export default connect(mSTP, actions)(Boards)