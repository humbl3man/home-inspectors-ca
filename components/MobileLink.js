import React, { Component } from 'react';

export default class MobileLink extends Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    if (this.props.onClick) {
      this.props.onClick(event);
    }

    if (this.props.onCustomClick) {
      this.props.onCustomClick(event);
    }
  }

  render() {
    const { onCustomClick, children, ...props } = this.props;

    return (
      <a href="#" {...this.props} onClick={this.handleClick}>
        {children}
      </a>
    );
  }
}
