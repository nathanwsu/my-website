import React from 'react';
import ReactDOM from 'react-dom';
import App from '@components/App';

class App extends React.Component {
  render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
