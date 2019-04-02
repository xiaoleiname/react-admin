/**
 * 主页面路由组件
 */
import React, {Component} from 'react';
import { Redirect } from 'react-router-dom';

import { getItem } from '../../utils/storage-utils';
import memory from '../../utils/memory-utils';

export default class Admin extends Component {
    /*
     1. 要持久化存储用户信息 --> localStorage
     2. 性能优化（反复使用这些getItem等方法， 性能不好，所以保存在内存中）
     */
    constructor(props) {
        super(props);
        //判断用户是否登陆过
        const user = getItem();
        if (!user || !user._id) {
            //说明用户没登陆过，跳转到登录页面
            return this.props.history.replace('/login');
        }
        //在内存中存储用户信息
        memory.user = user;
    }



    render () {
        return (
            <div>
               Admin
            </div>
        )
    }
}
