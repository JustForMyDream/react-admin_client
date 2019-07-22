import React, {Component} from 'react';
import './login.less'

export default class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="login">
                <header className="login-header"></header>
                <section className="login-content"></section>
            </div>
        )
    }
}
