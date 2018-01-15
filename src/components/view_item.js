import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingleItem } from '../actions';

class ViewItem extends Component {

    componentDidMount(){
        this.props.getSingleItem(this.props.match.params.id);
    }

    render(){

        if(!this.props.single){
            return null;
        }

        return (
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to="/">Back</Link>
                </div>
                <h1 className="text-center">View Item: {this.props.single.title}</h1>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        single: state.todo.single
    }
}

export default connect(mapStateToProps, { getSingleItem })(ViewItem);
