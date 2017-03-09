import React, { Component } from 'react';
import { addTodo } from '../actions/todoActions';
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
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            <button onClick={()=>this.props.addTodo(this.state.value)}> Add </button>
            <p>{this.props.todolist}</p>
            </div>
        )
    }
}

function bindActions(dispatch) {
    return {
        addTodo: ()=> dispatch(addTodo())
  };
}

function mapStateToProps(state) {
 
  return {
    todolist: state.list.todos
  };
}



export default connect(mapStateToProps, bindActions)(Home);
