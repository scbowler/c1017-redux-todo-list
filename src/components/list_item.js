import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteItem, getItems } from '../actions';

const ListItem =  props => {
    
    const handleDelete = () => {
        props.deleteItem(props._id).then(() => {

            props.getItems();
        });
    }

    return (
        <li className="list-group-item">
            <Link to={`/item/${props._id}`}>{props.title}</Link>
            <button onClick={handleDelete} className="float-right btn btn-outline-danger">Delete Item</button>
        </li>
    )
}

export default connect(null, { deleteItem, getItems })(ListItem)
