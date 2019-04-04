/**
 * 主页面路由组件
 */
import React, {Component} from 'react';
import { Route, Switch, Redirect  } from 'react-router-dom';
import {
    Layout,
} from 'antd';

import Home from '../home';
import Category from '../category';
import Product from '../product';
import Role from '../role';
import User from '../user';
import Line from '../charts/line';
import Pie from '../charts/pie';
import Bar from '../charts/bar';
import HeaderMain from '../../components/header-main';
import { getItem } from '../../utils/storage-utils';
import memory from '../../utils/memory-utils';
import LeftNav from '../../components/left-nav';
const {
    Header, Content, Footer, Sider,
} = Layout;




export default class Admin extends Component {
    /*
     1. 要持久化存储用户信息 --> localStorage
     2. 性能优化（反复使用这些getItem等方法， 性能不好，所以保存在内存中）
     */
    constructor(props) {
        super(props);
        //初始化状态
        this.state = {
            collapsed: false,
        };

        //判断用户是否登陆过
        const user = getItem();
        if (!user || !user._id) {
            //说明用户没登陆过，跳转到登录页面
            return this.props.history.replace('/login');
        }
        //在内存中存储用户信息
        memory.user = user;
    }

    onCollapse = (collapsed) => {
        console.log(collapsed);
        this.setState({ collapsed });
    }

    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                   <LeftNav/>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0 ,height:100}} >
                        <HeaderMain/>
                    </Header>
                    <Content style={{ margin: '20px 16px' }}>
                        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
                           <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}/>
                            <Route path='/product' component={Product}/>
                            <Route path="/user" component={User}/>
                            <Route path="/role" component={Role}/>
                            <Route path="/charts/line" component={Line}/>
                            <Route path="/charts/bar" component={Bar}/>
                            <Route path="/charts/pie" component={Pie}/>
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                       大家好，我是渣渣辉、是兄弟就来贪玩蓝月！！
                    </Footer>
                </Layout>
            </Layout>
        );
    }
    }
