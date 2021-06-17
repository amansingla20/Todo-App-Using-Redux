import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../actions/action';
import './AddTodo.css';

const AddTodo = (props) => {
    return (
        <form onSubmit = {(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            props.dispatch(addTodo(input));
            event.target.userInput.value ='';
        }}>
            <input type="text" name='userInput' className='input-field'/>
            <input type="submit"  value ='Add Todo' className='add-todo-button'/>
        </form>
    )
}

export default connect()(AddTodo);
