import React from 'react';
import Header from './Header';
import AddTodo from './AddTodo';
import Lists from './Lists';
import ReactToPrint from "react-to-print";

class TodoList extends React.Component {
    state = {
        addTodo: false,
        lists: ['buy a new pair of shoes', 'buy a baby dinning chair', "finish styling the react app", "meet with a friend at 12pm"]
        //lists: []
    };
    handleAddTodo = () => {
        this.setState((prevState)=>({addTodo: !prevState.addTodo}));
    }
    handleDeleteTodo = (deleteList) => {
        //use filter, not map
        this.setState((prevState) => ({lists: prevState.lists.filter(list => list !== deleteList)}));
    
    }
    onSubmit = (newTodo) => {
        console.log("newTodo: "+newTodo);
        this.setState((prevState)=>({lists: prevState.lists.concat([newTodo])}));
    }
    render(){
        return (
            <div className='container'>
                <Header />
                <div className='widget'>
                    <Lists handleDelete={this.handleDeleteTodo} lists={this.state.lists}/>
                </div>
                <AddTodo showForm={this.state.addTodo} handleAddTodo={this.handleAddTodo} lists={this.state.lists} onSubmit={this.onSubmit}/>
            </div>
        )
    }
}

class TodoListWithPrinter extends React.Component {
    render() {
        return (
            <div className='todo-printer'>
                <TodoList ref={el => (this.componentRef = el)}/>
                <ReactToPrint
                    trigger = {() => <a className='printer' href="#">Print this list</a>}
                    content = {() => this.componentRef}
                />
            </div>
        );
    }
}

export default TodoListWithPrinter;