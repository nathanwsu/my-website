import React from 'react';
import ReactDOM from 'react-dom';

class Button extends React.Component {
    render() {
        return (
            <button> Hello! </button>
        );
    }
}

ReactDOM.render(<Button />, document);