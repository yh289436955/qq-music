/**
 * Created by Administrator on 2017/3/22.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';


//音乐馆界面
class Music extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            banner : [
                {
                    imgUrl : require('../img/1.jpg'),
                },
                {
                    imgUrl : require('../img/2.jpg'),
                },
                {
                    imgUrl : require('../img/3.jpg'),
                }
            ]
        }
    };
    render (){
        return (
            <div>
                <Banner banner={this.state.banner} />
            </div>
        )
    }
};

//banner图
class Banner extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            banner : props.banner,                  //获取banner图
            leng : props.banner.length,            //获取有多少张图片
            textArr : [],                           //定义一个数组来存放banner结构
        }
    };
    //页面加载之前调用此方法来进行页面banner的布局
    componentWillMount (){
        var left = 0;               //left初始化
        var key = 1;
        for (let j=0;j<2;j++)
        {
            for (let i in this.state.banner)
            {
                let that = this.state.banner[i];
                //设置背景图
                var bg = {
                    background: 'url('+that.imgUrl+')',
                };
                //设置left
                var Left = {
                    left : left+"%",
                }
                left += 100;            //left值自加
                this.state.textArr.push(
                    <div key={key} className="banner-img" style={Left}>
                        <span style={bg}></span>
                    </div>
                );
                key++;
            }
        }
    };
    //页面加载完成后调用此方法来经行自动的滑动
    componentDidMount (){
        // setTimeout(function () {
        //     let left = document.getElementsByTagName("banner-hua").style.left;
        // }.bind(this),2000)
    };
    render (){
        return (
            <div className="music-banner">
                <div className="banner-hua" id="banner">
                    {this.state.textArr}
                </div>
            </div>
        )
    };
}

export default Music;