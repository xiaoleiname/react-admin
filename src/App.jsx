//应用主组件
import React,{ Component } from 'react';
import { Route, Switch, Redirect} from 'react-router-dom';

import Login from './pages/login';
import Admin from './pages/admin';
import './assets/less/reset.less';

// 测试高阶组件
 //import A from './test/login';
 //import B from './test/register';



export default class App extends Component {
    render() {
        return (
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/" component={Admin}/>
                {/* 为了开发login组件设计的 */}
                {/*<Redirect to="/login"/>*/}
            </Switch>
        )
    }
}