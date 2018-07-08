import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        return (
            <div>
                <h4>
                    My Website!
                </h4>
                <h6>
                    By Nathan Su
                </h6>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
