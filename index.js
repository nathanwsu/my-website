import React from 'react';
import ReactDOM from 'react-dom';

class HomeButton extends React.Component {
    render() {
        return (
            <div>
                <button> Hello World! </button>
                <label> By Nathan Su</label>
            </div>
        );
    }
}

ReactDOM.render(<HomeButton />, document);