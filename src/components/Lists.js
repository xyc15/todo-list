import React from 'react';
import List from './List';

const Lists = (props) => (
    <div>
        {props.lists.length === 0 && <h3 className='widget__message'>No Todos</h3>}
        {props.lists.map((currentList, index)=>(
            <List key={currentList}list={currentList} count={index+1} handleDelete={props.handleDelete} />
        ))}
    </div>
);

export default Lists;