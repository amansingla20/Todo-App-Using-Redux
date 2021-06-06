import React from 'react'
import {connect} from 'react-redux';
import {addTodo} from '../../actions/action';

const AddTodo = (props) => {
    return (
        <form onSubmit = {(event)=>{
            event.preventDefault();
            let input = event.target.userInput.value;
            props.dispatch(addTodo(input));
            event.target.userInput.value ='';
        }}>
            <input type="text" name='userInput' />
            <input type="submit"  value ='Submit'/>
        </form>
    )
}

export default connect()(AddTodo);
