import React from 'react';
import Modal from './ErrorModal';
import {FaPlusCircle} from 'react-icons/fa';

export default class AddTodo extends React.Component {

    constructor(props){
        super(props);
    }

    state={
        error: undefined
    }

    handleAddTodo = (e) => {
        e.preventDefault();//to prevent the refresh of webpage when submit the form
        const newTodo = e.target.elements.todo.value;
        
        if(!newTodo || !newTodo.replace(/\s/g, '').length) {
            this.setState(()=>({error: 'Invalid Input'}));
        }
        else if(this.props.lists.indexOf(newTodo) > -1)
            this.setState(()=>({error: 'Todo already exists'}));
        else {
            this.setState(()=>({error: undefined}));
            this.props.onSubmit(newTodo);
        }

        e.target.elements.todo.value=''; //reset the form input value after submit
    }
    handleCloseModal = () => {
        this.setState(() => ({error: undefined}));
    }
    render() {
        return (
            <div>
                <div>
                    <Modal handleCloseModal={this.handleCloseModal} message={this.state.error}/>
                </div>
                <div className='add-todo'>
                    <FaPlusCircle className='button--circle' onClick={this.props.handleAddTodo} />
                    {
                    this.props.showForm 
                        &&  
                        (
                            <form className='todo' onSubmit={this.handleAddTodo}> 
                                <input className='todo__content' type='text' placeholder='Add a New Todo' name='todo'/>
                                <button className='button'>Add</button>
                            </form>
                        )
                    }
                </div>
            </div>
        );
    }
};
