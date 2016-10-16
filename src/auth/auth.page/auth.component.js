import React, { Component } from 'react';

export default class AuthPage extends Component {
    loginWithGithub() {
        this.props.loginWithGithub();
    }

    render() {
        return (
          <button onClick={() => this.loginWithGithub()}>Login with github</button>
        );
    }
}
