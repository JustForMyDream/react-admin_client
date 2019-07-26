import React, {Component} from 'react';
import {Redirect,Switch,Route} from 'react-router-dom';
import { Layout } from 'antd';
import memoryUtils from '../../utils/memoryUtils'
import Header from '../../components/header/header'
import LeftNav from '../../components/left-nav/left_nav'
import Home from '../home/home';
import Category from '../category/category';
import Product from '../product/product'

const {  Footer, Sider, Content } = Layout;

export default class Admin  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const user = memoryUtils.user;
        if(!user || !user.id){
            return <Redirect to='/login'/>
        }
        return (
            <Layout style={{height:"100%"}}>
                <Sider><LeftNav/></Sider>
                <Layout>
                    <Header></Header>
                    <Content>
                        <switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/Product' component={Product}/>
                            <Redirect to={'/home'}></Redirect>
                        </switch>
                    </Content>
                    <Footer style={{textAlign:"center"}}>版权所属</Footer>
                </Layout>
            </Layout>
        )
    }
}
