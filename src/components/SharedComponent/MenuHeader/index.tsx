import * as React from 'react';
import { Menu } from 'semantic-ui-react';

export interface IMeanuHeaderStateProps {}

export interface IMenuHeaderDispatchProps {}

interface IMenuHeaderOtherProps {}

type IMenuHeaderProps = IMeanuHeaderStateProps &
  IMenuHeaderDispatchProps &
  IMenuHeaderOtherProps;

interface IMenuHeaderState {
  activeItem: string;
}

export default class MenuHeader extends React.Component<
  IMenuHeaderProps,
  IMenuHeaderState
> {
  constructor(props: IMenuHeaderProps, context?: any) {
    super(props, context);
    this.state = { activeItem: '' };

    this.handleItemClick = this.handleItemClick.bind(this);
  }

  handleItemClick(e: any, object: any) {
    this.setState({ activeItem: object.name });
  }

  public render() {
    console.log('This.state: ', this.state);
    return (
      <Menu>
        <Menu.Item
          name="home"
          active={this.state.activeItem === 'home'}
          content="Home"
          onClick={this.handleItemClick}
        />

        <Menu.Item
          name="aboutMe"
          active={this.state.activeItem === 'aboutMe'}
          content="About Me"
          onClick={this.handleItemClick}
        />
      </Menu>
    );
  }
}
