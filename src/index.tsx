import * as React from 'react';
import * as ReactDOM from 'react-dom';
import MyApp from '@components/App';

export default class HomePage extends React.Component {
  constructor(props: any, context?: any) {
    super(props, context);
  }

  public render() {
    return (
      <div>
        <MyApp />
      </div>
    );
  }
}

ReactDOM.render(<HomePage />, document.getElementById('root'));
