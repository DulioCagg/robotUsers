import React, { Component } from 'react';

class ErrorBoundry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    }
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: true });
  }

  render() {
    const { hasError } = this.state;
    if (hasError) {
      return <h2>Error M8, something went wrong!</h2>
    } else {
      return this.props.children;
    }
  }

}

export default ErrorBoundry;