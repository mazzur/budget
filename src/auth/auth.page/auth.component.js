import React, {Component} from 'react';

export default class AuthPage extends Component {
    loginWithGithub() {
        this.props.loginWithGithub();
    }

    render() {
        const loginWithGithub = this.loginWithGithub.bind(this);

        return (
            <button onClick={loginWithGithub}>Login with github</button>
        )
    }
}