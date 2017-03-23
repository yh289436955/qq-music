/**
 * Created by Administrator on 2017/3/22.
 */
import React from 'react';
import {NavLink} from 'react-router-dom';
var autoPlayFlag = null;            //定时器

//音乐馆界面
class Music extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            //banner图的数据
            banner : [
                {
                    imgUrl : require('../img/1.jpg'),
                },
                {
                    imgUrl : require('../img/2.jpg'),
                },
                {
                    imgUrl : require('../img/3.jpg'),
                },
                {
                    imgUrl : require('../img/4.jpg'),
                }
            ],
            //热门推荐的数据
            list : {
                name : "热门推荐",
                href : "/",
                recommendation : [
                    {
                        imgUrl : require('../img/music_cove.jpg'),
                        title : "比录音动听？听女王A-Lin的现场爆发！",
                        sum : 85
                    },
                    {
                        imgUrl : require('../img/music_cove1.jpg'),
                        title : "背一把木吉他，唱尽人生百态 | 民谣",
                        sum : 101
                    },
                    {
                        imgUrl : require('../img/music_cove2.jpg'),
                        title : "欧美：前奏撩人，开口就让人心动的女孩！",
                        sum : 121
                    },
                    {
                        imgUrl : require('../img/music_cove3.jpg'),
                        title : "华语情歌100首：故事太多，没人会听了不说好！",
                        sum : 125
                    },
                    {
                        imgUrl : require('../img/1.jpg'),
                        title : "纯音不急不燥，给你沉醉的旋律",
                        sum : 11
                    },
                    {
                        imgUrl : require('../img/2.jpg'),
                        title : "忆青春：苦涩的回忆或许是最好的结局。",
                        sum : 23
                    }
                ]
            },
            //每日推荐歌曲
            everyday : [
                {
                    imgUrl : require('../img/music_cove.jpg'),
                    name : "倩女幽魂",
                    singer : "张国荣",
                    href : require('../mp3/倩女幽魂.mp3')
                },
                {
                    imgUrl : require('../img/music_cove1.jpg'),
                    name : "河流",
                    singer : "汪峰",
                    href : require('../mp3/河流.mp3')
                }
                ,
                {
                    imgUrl : require('../img/music_cove1.jpg'),
                    name : "河流",
                    singer : "汪峰",
                    href : require('../mp3/河流.mp3')
                }
                ,
                {
                    imgUrl : require('../img/music_cove1.jpg'),
                    name : "河流",
                    singer : "汪峰",
                    href : require('../mp3/河流.mp3')
                }
            ]
        }
    };
    componentWillReceiveProps (){
        this.setState({
            Stop : this.props.stop
        })
    }
    render (){
        return (
            <div>
                <Banner banner={this.state.banner} />
                <List />
                <Recommendation recommendation={this.state.list} />
                <Everyday everyday={this.state.everyday} />
            </div>
        )
    }
};

//banner图
class Banner extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            Stop : props.stop,                        //获取父级传来的状态是否需要停止定时器
            banner : props.banner,                  //获取banner图
            leng : props.banner.length,            //获取有多少张图片
            textArr : [],                           //定义一个数组来存放banner结构
            speed : 3000,                           //定义一个变量来存放时间
            nowLocal : 0,                           //初始化位置
            sum : 1,                                 //记录移动次数
            touches : {                             //触摸坐标
                X : 0,
                Y : 0
            },
            touchesDistance : {                     //触摸移动的距离
                X : 0,
                Y : 0
            }

        }
    };
    //页面加载之前调用此方法来进行页面banner的布局
    componentWillMount (){
        var left = 0;               //left初始化
        for (let i in this.state.banner)
        {
            let that = this.state.banner[i];
            var bk = {
                backgroundImage : 'url('+that.imgUrl+')'
            }
            //设置left
            var Left = {
                left : left+"%",
            }
            left += 100;            //left值自加
            this.state.textArr.push(
                <div key={i} className="banner-img" style={Left}>
                    <span style={bk}></span>
                </div>
            );
        }
    };
    //页面加载完成后调用此方法来经行自动的滑动
    componentDidMount (){
            this.Slide();
    };
    //正常轮播
    Slide (){
        autoPlayFlag = setInterval(function () {
            if (this.refs.banner != undefined)
            {
                this.setState({
                    nowLocal : this.state.nowLocal - 100,
                    sum : this.state.sum + 1
                },function () {
                    setTimeout(function () {
                        if (this.refs.banner != undefined) {
                            var dom = this.refs.banner.childNodes[0];                                             //获取第一张图片
                            var Left = parseInt(this.refs.banner.childNodes[this.state.leng - 1].style.left);      //获取最后一张图片的位置
                            this.refs.banner.appendChild(dom)
                            dom.style.left = (Left + 100) + "%";
                        }
                    }.bind(this),this.state.speed)
                })
            }
            else
            {
                this.Stop();
            }
        }.bind(this),this.state.speed);
    };
    //左右滑动
    AboutSlide (is_slid){
        if (is_slid == "left")         //左移
        {
            this.setState({
                nowLocal : this.state.nowLocal - 100,
                sum : this.state.sum + 1
            },function () {
                setTimeout(function () {
                    var dom = this.refs.banner.childNodes[0];                                             //获取第一张图片
                    var Left = parseInt(this.refs.banner.childNodes[this.state.leng-1].style.left);      //获取最后一张图片的位置
                    this.refs.banner.appendChild(dom)
                    dom.style.left = (Left+100)+"%";
                    this.Slide();
                }.bind(this),this.state.speed/2)
            })
        }
        else                    //右移
        {
            this.setState({
                nowLocal : this.state.nowLocal + 100,
                sum : this.state.sum - 1
            },function () {
                var dom = this.refs.banner.childNodes[this.state.leng-1];                              //获取最后一张图片
                var Left = parseInt(this.refs.banner.childNodes[0].style.left);                        //获取第一张图片的位置
                var dom1 = this.refs.banner.childNodes[0];                                              //获取第一张图片
                this.refs.banner.insertBefore(dom,dom1)
                dom.style.left = (Left-100)+"%";
                this.Slide();
            })
        }
    };
    //停止自动滚动事件
    Stop (){
        clearInterval(autoPlayFlag);
    };
    //触摸开始
    touchStart (event){
       this.setState({
           touches : {
               X : event.touches[0].pageX,
               Y : event.touches[0].pageY,
            }
       })
        event.preventDefault();
    };
    //触摸移动
    touchmove (event){
        var X = event.touches[0].pageX - this.state.touches.X;              //触摸过后移动的距离--X
        var Y = event.touches[0].pageY - this.state.touches.Y;              //触摸过后移动的距离--Y
        this.setState({
            touchesDistance : {
                X : X,
                Y : Y
            }
        })
        event.preventDefault();
    };
    //触摸结束
    touchEnd (event){
        if (this.state.touchesDistance.X < 0 && Math.abs(this.state.touchesDistance.X) > 30 && this.state.touchesDistance.Y < 15)
        {
            this.Stop();            //停止自动轮播
            this.AboutSlide("left");
        }
        else if (this.state.touchesDistance.X > 0 && this.state.touchesDistance.X > 30 &&  this.state.touchesDistance.Y < 15)
        {
            this.Stop();            //停止自动轮播
            this.AboutSlide("right");
        }
        event.preventDefault();
    };
    render (){
        return (
            <div className="music-banner">
                <div className="banner-hua" ref="banner" onTouchStart={this.touchStart.bind(this)}onTouchMove={this.touchmove.bind(this)} onTouchEnd={this.touchEnd.bind(this)} style={{left:this.state.nowLocal+"%"}} >
                    {this.state.textArr}
                </div>
            </div>
        )
    };
}

//列表
class List extends React.Component{
    render (){
        return (
            <div className="banner-list">
                <ul className="clear">
                    <li><NavLink to="/"><img src={require('../img/geshou.png')} alt=""/>歌手</NavLink></li>
                    <li><NavLink to="/"><img src={require('../img/paihang.png')} alt=""/>排行</NavLink></li>
                    <li><NavLink to="/"><img src={require('../img/diantai.png')} alt=""/>电台</NavLink></li>
                    <li><NavLink to="/"><img src={require('../img/fenlei.png')} alt=""/>分类歌单</NavLink></li>
                    <li><NavLink to="/"><img src={require('../img/shiping.png')} alt=""/>视频MV</NavLink></li>
                    <li><NavLink to="/"><img src={require('../img/zhuanji.png')} alt=""/>数字专辑</NavLink></li>
                </ul>
            </div>
        )
    }
};

//热门推荐
class Recommendation extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            list : props.recommendation,
            tetxArr : []
        }
    };
    //页面加载子前获取数据
    componentWillMount (){
        for (let i in this.state.list.recommendation)
        {
            let that = this.state.list.recommendation[i];
            this.state.tetxArr.push(
                <li key={i}>
                    <NavLink to="/">
                        <img src={that.imgUrl} alt=""/>
                        <p>{that.title}</p>
                        <span><img src={require('../img/ting.png')} alt=""/>{that.sum}万</span>
                    </NavLink>
                </li>
            )
        }
    };
    render (){
        return (
            <div className="banner-recommendation">
                <div className="recommendation-title">
                    <NavLink to={this.state.list.href}>
                        <h3>{this.state.list.name}</h3>
                        <img src={require('../img/tarrow.png')} alt=""/>
                    </NavLink>
                </div>
                <ul className="clear">
                    {this.state.tetxArr}
                </ul>
            </div>
        )
    };
};

//每日推荐歌曲
class Everyday extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            everyday : props.everyday,
            textArr : []
        }
    };
    //页面加载子前获取数据
    componentWillMount (){
        for (let i in this.state.everyday)
        {
            let that = this.state.everyday[i];
            this.state.textArr.push(
                <li key={i}>
                    <a href="javascript:void(0)" className="clear">
                        <div className="everyday-left">
                            <img src={that.imgUrl} alt=""/>
                        </div>
                        <div className="everyday-right">
                            <p>{that.name}</p>
                            <p>{that.singer}</p>
                        </div>
                    </a>
                </li>
            )
        }
    }
    render (){
        return (
            <div className="banner-everyday">
                <div className="everyday-title">
                    <NavLink to="/">
                        <h3>每日为你推荐30首</h3>
                        <img src={require('../img/tarrow.png')} alt=""/>
                    </NavLink>
                </div>
                <ul>
                    {this.state.textArr}
                </ul>
            </div>
        )
    }
}

export default Music;