import React, {Component} from 'react';
import { inject, observer } from "mobx-react";
@inject("userStore")
@observer
export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                Home
            </div>
        )
    }
}

