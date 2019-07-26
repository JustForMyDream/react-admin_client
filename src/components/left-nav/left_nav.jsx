import React, {Component} from 'react';
import { Menu, Icon, Button } from 'antd';
import {Link} from 'react-router-dom';
import './left_nav.less'
import logo from '../../assets/images/logo.png'
const { SubMenu } = Menu;

export default class leftNav  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <Link to='/' className="left_nav">
                    <header className="left_nav_header">
                        <img src = {logo} alt='logo'></img>
                        <h1>居然生活</h1>
                    </header>
                    <Menu
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="home">
                            <Link to={"/home"}>
                                <Icon type="pie-chart" />
                                <span>首页</span>
                            </Link>

                        </Menu.Item>
                        <SubMenu
                            key="sub1"
                            title={
                                <span>
                                    <Icon type="mail" />
                                    <span>商品</span>
                                </span>
                            }
                        >
                            <Menu.Item key="category">
                                <Link to={"/category"}>
                                    <Icon type="pie-chart" />
                                    品类管理
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="6">
                                <Link to={'/product'}>
                                    <Icon type="pie-chart" />
                                    商品管理
                                </Link>
                            </Menu.Item>
                        </SubMenu>

                    </Menu>
                </Link>

            </div>


        )
    }
}
