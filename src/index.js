import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Button extends React.Component {
    render() {
        return (
            <button> Hello! </button>
        );
    }
}

ReactDOM.render(<Button />, document);