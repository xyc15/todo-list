import React from 'react';
import { IoIosTrash } from "react-icons/io";

export default class List extends React.Component {
    constructor(props){
        super(props);
    }

    handleDelete = () => {
        this.props.handleDelete(this.props.list);//important, a way to delete according to pros content value!!!
    }
    render() {
        return(
            <div className='list'>
                <span className='list__delete' onClick={this.handleDelete}><IoIosTrash className='list__delete--trash'/></span>
                <li className='list__content'><span className='list__content--number'>{this.props.count}</span>{this.props.list}</li>
            </div>
        );
    }
}