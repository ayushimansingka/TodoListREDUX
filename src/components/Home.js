import React, { Component } from 'react';
import { addTodo , deleteTodo , markComplete } from '../actions/todoActions';
import { connect } from 'react-redux';

class Home extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
        value:''
        };
        this.handleChange=this.handleChange.bind(this);
    }

    handleChange(e)
    {
        
        this.setState({value: e.target.value});
         
       
    }
    render()
    {
        
        return(
            <div>
            <h1>TODO</h1>
            <input style={{margin: 5}} type='text' value={this.state.value} onChange={this.handleChange}/>
            <button style={{margin: 10, padding: 10}} onClick={() => this.props.addTodo(this.state.value)}> Add </button>
            <ul>
                {this.props.todolist.map((item)=>(
                <li key={item.id}>{item.name}
                <button  style={{margin: 10, padding: 10}} onClick={()=>this.props.deleteTodo(item.id)} > Delete </button> 
                <button style={{margin: 10, padding: 10}} onClick={()=>this.props.markComplete(item.id)} disabled={item.completed}> Mark as complete </button>
                </li>
                )
                )
                }
            </ul>
            </div>
        )
    }
}

function bindActions(dispatch) {
    return {
        addTodo: (val)=> dispatch(addTodo(val)),
        deleteTodo: (id)=>dispatch(deleteTodo(id)),
        markComplete: (id)=>dispatch(markComplete(id))
  };
}

function mapStateToProps(state) {
 
  return {
    todolist: state.list.todos
  };
}



export default connect(mapStateToProps, bindActions)(Home);
