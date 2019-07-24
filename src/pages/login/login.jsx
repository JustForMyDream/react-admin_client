import React, {Component} from 'react';
import { Form, Icon, Input, Button  } from 'antd';
import './login.less'
import logo from './images/logo.png'
import {relogin} from  '../../api/index'

const Item = Form.Item;

class Login  extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);

                const {username,password} = values;
                relogin(username,password).then(response=>{
                    console.log(response)
                }).catch(err=>{
                    console.log(err)
                })
            }else {
                console.log("校验失败")
            }
        });

    }

    validatorPwd = (rule, value, callback) =>{
        if(!value){
            callback("密码必须输入")
        }else if(value.length<4){
            callback("密码不能小于4")
        }
        callback();
    }



    render() {
        const form  = this.props.form;
        const  {getFieldDecorator} = form;
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="log"/>
                    <h1>居然：后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item>
                            {getFieldDecorator('username', {
                                rules: [
                                    { required: true, message: '请输入用户名' },
                                    { max: 12,message: '用户名不能超过12位'},
                                    { min: 4,message: '用户名不能少于4位'},
                                    { pattern: /^[a-zA-Z0-9_]+$/,message: '必须为字母和数字'},
                                    ],
                            })(
                                <Input
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    placeholder="账号"
                                />,
                            )}
                        </Item>
                        <Item>
                            {getFieldDecorator('password', {
                                rules: [
                                    {
                                        validator: this.validatorPwd
                                    }
                                ]
                            })(
                                <Input
                                    prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    type="password"
                                    placeholder="密码"
                                />,
                            )}
                        </Item>
                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Log in
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

const WarpLogin = Form.create()(Login)
export default WarpLogin
