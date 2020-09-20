// 首页
import React from 'react';
import './index.less';
import mainPageList from '../../utils/mainpagenav/index'

export default class MainPage extends React.Component {
    render() {
        function NavList(item: any) {
            return (
                <li className="nav-item pointer">
                    <p className="nav-item-label">{item.label || ''}</p>
                    <div className="nav-item-desc">{item.desc || ''}</div>
                    <div className="go-icon">G0 -&gt;</div>
                </li>
            )
        }
        return(
            <div className="mainPage">
                <div className="mainpage-header"><h1>主页导航</h1></div>
                <div className="mainpage-content">
                    <ul className="nav-wrap display-item-center">
                        {mainPageList.length ? mainPageList.map((item) => (
                            NavList(item)
                        )) : null}
                    </ul>
                </div>
            </div>
        )
    }
}
