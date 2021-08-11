import React, { Component } from 'react';
import ErrorMessage from '../error-message';
        
import './error-boundry.css';

export default class ErrorBoundry extends Component {

  state = {
    hasError: false
  }

  componentDidCatch() {
    this.setState({ hasError: true })
  }

  render() {
    const { hasError } = this.state;
    const { children } = this.props;

    return hasError ? <ErrorMessage /> : children;
  }
}