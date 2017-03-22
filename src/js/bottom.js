/**
 * Created by Administrator on 2017/3/10.
 */
import React from 'react'
import {NavLink} from 'react-router-dom';


class Public extends React.Component {
    render (){
        return (
            <div className="index_bottom">
                <ul className="clear">
                    <li><a href="javascript:void(0)"></a></li>
                    <li><NavLink  to="/souye" activeClassName="action">我的</NavLink></li>
                    <li><NavLink  to="/my" activeClassName="action">音乐馆</NavLink></li>
                    <li><NavLink  to="/my" activeClassName="action">发现</NavLink></li>
                    <li><NavLink to="/my" className="shiqu"></NavLink></li>
                </ul>
                <div><NavLink to="/my"><span></span>搜索</NavLink></div>
            </div>
        )
    }
};
export default Public;          //抛出去