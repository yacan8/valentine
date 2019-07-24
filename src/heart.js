import React from 'react';

export default class Heart extends React.Component {

    render() {
        return <div className="heartWrapper">
            <div className="heart"></div>
            <div className="heart bounce"></div>
        </div>
    }
}