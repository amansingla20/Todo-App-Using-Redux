import React from 'react'
import {connect} from 'react-redux';
import {deleteTodo} from '../../actions/action';
import './List.css';

const List = (props) => {
    return (
        <div className='display'>
            {props.todos.map((todo, index)=>(
                <p className='todo-text' key ={index}>{todo.message}<button className= 'delete-todo' onClick={()=> props.dispatch(deleteTodo(todo.id))}>Delete</button></p>
            ))}
        </div>
    )
}

const mapStateToProps = (state)=>({
    todos: state.todos.data,
})


export default connect(mapStateToProps)(List);