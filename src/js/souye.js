import React from 'react'
import Public from './bottom.js';
import {NavLink} from 'react-router-dom';
//头像位置
class Head_portrait extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            head : props.head.head,                  //获取父级传来的头像
            is_login : props.head.is_login,          //获取用户是否登陆
            when_long : props.head.when_long,        //获取已经听歌的时长
            name : props.head.name,                  //获取用户名称
            green_brick : props.head.green_brick,    //获取用户是否是绿砖
        };
    };
    render (){
        return (
            <div className="souye-head">
                <NavLink to="/" className="when-long" ><span className="when"></span>{this.state.when_long}</NavLink>
                <NavLink to="/" className="head" ><img src={this.state.head} alt=""/></NavLink>
                <NavLink to="/" className="green-brick" ><span  className={this.state.green_brick == false ? "" : "green-brick"}></span>开通</NavLink>
                <p>
                    <span>--</span>
                    {this.state.name}
                    <span>--</span>
                </p>
                <NavLink to="/" className="green"></NavLink>
            </div>
        )
    }
};


//输出界面
class Souye extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            Head : {
                head : require('../img/head.jpg'),
                is_login : true,
                when_long : '1小时',
                name : 'foreach',
                green_brick : false
            }
        };
    };
    render (){
        return (
            <div className="body-souye">
                <Public />
                <div className="souye-content">
                    <Head_portrait head={this.state.Head} />
                </div>
            </div>
        )
    }
}


export default Souye;