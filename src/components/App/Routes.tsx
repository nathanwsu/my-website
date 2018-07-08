import * as React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import ViewHome from '@containers/ViewHome';

export default class extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path="/" component={ViewHome} />
      </Switch>
    );
  }
}
