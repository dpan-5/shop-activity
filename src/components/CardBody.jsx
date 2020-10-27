import React, { Component } from 'react';

class CardBody extends Component {

    render() {
        return (
            <div className="card-body">
                <p className="card-text">Click Count: {this.props.count}</p>
                <button className="btn btn-primary" onClick={this.props.handleInc}>
                    Increment
                </button>
                <button className="btn btn-primary" onClick={this.props.handleDec}>
                    Decrement
                </button>
            </div>
        );
    }
}

export default CardBody;