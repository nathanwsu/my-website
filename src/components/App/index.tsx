import * as React from 'react';
import { MenuHeader } from '@components/SharedComponent';

export interface IAppStateProps {}

export interface IAppDispatchProps {}

export interface IAppOtherProps {}

type IAppProps = IAppStateProps & IAppDispatchProps & IAppOtherProps;

interface IAppState {}

export default class App extends React.Component<IAppProps, IAppState> {
  constructor(props: IAppProps, context?: any) {
    super(props, context);
  }
  public render() {
    return (
      <div>
        <MenuHeader />
      </div>
    );
  }
}
