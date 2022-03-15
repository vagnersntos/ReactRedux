import './App.css';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import {addTodo} from './actions/actions';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

class App extends Component {
  render() {

    const {dispatch, visibleTodos} = this.props;

    return(
      <div className="App">
        <header className="App-header">
          <div>
          <AddTodo onAddClick={text => dispatch(addTodo(text))} />
          <TodoList todos={visibleTodos} />
          </div>
        </header>
      </div>
    );
  }
}

function select(state){
  return{
    visibleTodos: state.todos
  }
}

export default connect (select)(App);