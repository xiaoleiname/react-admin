import React, { Component } from 'react';
import { Row, Col, Modal, } from 'antd';
import { withRouter} from 'react-router-dom';

import MyButton from '../my-button'
import { removeItem} from '../../utils/storage-utils';
import memory from '../../utils/memory-utils';
import './index.less';


@withRouter
 class HeaderMain extends Component {

    //登录退出
    logout = () => {
        Modal.confirm({
            title: '您确认要退出登录吗？',
            onOk: () => {
                // 清空所有用户信息
                memory.user = {};
                removeItem();
                // 跳转到登陆页面
                this.props.history.replace('/login');
            },
            // onCancel: () => {
            //   console.log('cancel')
            // },
            okText: '确认',
            cancelText: '取消'
        })
    }

    render() {
        return <div className="header-main">
           <Row className="header-main-top">
            <span>欢迎，xxx</span>
               <MyButton onClick={this.logout}>退出</MyButton>
           </Row>
           <Row className="header-main-bottom">
               <Col className="header-main-left" span={4}>用户管理</Col>
                   <Col className="header-main-right" span={20}>
                       <span>2019-04-03 10:52:47</span>
                       <img src=" http://api.map.baidu.com/images/weather/day/qing.png" alt="天气"/>
                       <span>晴</span>
                   </Col>
           </Row>
        </div>;
    }
}

export default HeaderMain