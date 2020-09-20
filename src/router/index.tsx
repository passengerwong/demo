import React, { Component } from 'react'
import {HashRouter, Switch, Route, Redirect} from 'react-router-dom'
import coreSysRoutes from './coreSys'; // 核心系统路由文件
import globalRoutes from './global/index';
import commonRoutes from './common/comon';
const routeList = [...commonRoutes, ...coreSysRoutes, ...globalRoutes]; // 路由集合

// 生成路由文件
const toDoRoures = (routeArr: any) => {

    return routeArr.map((items: any) => {
        if (items.children) { // 有子路由
            const childrenRoutes = toDoRoures(items.children);
            return childrenRoutes;
        } else if (items.redirect) {
            const component = () => <Redirect to={items.redirect} />
            return <Route path={items.path} exact component={component}></Route>
        } else {
            const component = items.component || React.Fragment;
            return <Route exact={items.exact} path={items.path} key={items.path} component={component}></Route>
        }
    })
}


export default class Routes extends Component {
    render() {
        return <HashRouter>
            <Switch>
                {toDoRoures(routeList)}
            </Switch>
        </HashRouter>
    }
}
