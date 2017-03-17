/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react';
import { Router, Route, Link} from 'react-router'

class Public extends React.Component {
    render (){
        return (
            <div className="index_bottom">
                <ul className="clear">
                    <li><Link to="/" className={this.props.is_name == "首页" ? "bottom_action" : ""} >首页</Link></li>
                    <li><Link to="/find" className={this.props.is_name == "发现" ? "bottom_action" : ""}>发现</Link></li>
                    <li><Link to="/minutes" className={this.props.is_name == "记录" ? "bottom_action" : ""}>记录</Link></li>
                    <li><Link to="/news" className={this.props.is_name == "消息" ? "bottom_action" : ""}>消息</Link></li>
                    <li><Link to="/my" className={this.props.is_name == "我的" ? "bottom_action" : ""}>我的</Link></li>
                </ul>
            </div>
        )
    }
};
export default Public;          //抛出去