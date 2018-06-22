import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component{
    render() {
        return () => {
            <div>
                <h4>
                    My Website!
                </h4>
                <body>
                    By Nathan Su
                </body>
            </div>
        }
    }
}

ReactDOM.render(<App />, document.getElementById('root'));