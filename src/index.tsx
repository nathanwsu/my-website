import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from '@components/App';
import '../../node_modules/semantic-ui-css/semantic.min.css';
import '../src/css/site.css';

export default class HomePage extends React.Component {
  constructor(props: any, context?: any) {
    super(props, context);
  }

  public render() {
    return (
      <div>
        <App />
      </div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
