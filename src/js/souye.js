import React from 'react'
// import Public from './bottom.js';
import Play from './playcontrols.js';
import {NavLink} from 'react-router-dom';
import Music from './music.js';
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

//界面列表
class List extends React.Component {
    constructor (props){
        super(props);
        this.steat = {
            list : props.list
        };
    };
    render (){
        return (
            <div className="souye-list">
                <ul className="clear">
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/music.png')} alt=""/>
                            <p>本地歌曲</p>
                            <p>{this.steat.list.local.sum != 0 ? this.steat.list.local.sum : ""}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/music_xiazai.png')} alt=""/>
                            <p>下载歌曲</p>
                            <p>{this.steat.list.download.sum != 0 ? this.steat.list.download.sum : ""}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/music_zuijian.png')} alt=""/>
                            <p>最近播放</p>
                            <p>{this.steat.list.lately.sum != 0 ? this.steat.list.lately.sum : ""}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/love.png')} alt=""/>
                            <p>我喜欢</p>
                            <p>{this.steat.list.love.sum != 0 ? this.steat.list.love.sum : ""}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/mv.png')} alt=""/>
                            <p>下载MV</p>
                            <p>{this.steat.list.MV.sum != 0 ? this.steat.list.MV.sum : ""}</p>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/">
                            <img src={require('../img/yigou.png')} alt=""/>
                            <p>已购音乐</p>
                            <p>{this.steat.list.purchase.sum != 0 ? this.steat.list.purchase.sum : ""}</p>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

//电台列表
class Radiolist extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            radio : props.radio,
            is_play : true,
            playControls : {
                name : "河流",                                //设置音乐名称
                imgUrl : require('../img/music_cove2.jpg'),      //设置音乐封面
                musicUrl : require('../mp3/河流.mp3'),        //设置音乐
                is_play : true
            }
        };
    };
    Isplay (){                      //点击播放和暂停按钮
        var audio = document.getElementById("audio");
        if (this.state.is_play)
        {
            this.props.callbackParent(this.state.playControls);
            this.setState({
                is_play: false
            })
        }
        else
        {
            audio.pause();
            this.setState({
                is_play: true
            })
        }
    };
    render (){
        return (
            <div className="souye-Radiolist">
                <ul>
                    <li>
                        <a href="javascript:void(0)" className="clear" onClick={this.Isplay.bind(this)}>
                            <div className="Radiolist-img">
                                <img src={this.state.radio[0].imgurl} alt=""/>
                                <span className="bk"></span>
                                <span className={this.state.is_play == true ? "play" : "suspend"}></span>
                            </div>
                            <div className="Radiolist-content">
                                <p>{this.state.radio[0].title}</p>
                                <p>{this.state.radio[0].describe}</p>
                            </div>
                        </a>
                    </li>
                    <li>
                        <NavLink to="/" className="clear">
                            <div className="Radiolist-img">
                                <img src={this.state.radio[1].imgurl} alt=""/>
                                <span className="bk"></span>
                                <span className="Run"></span>
                            </div>
                            <div className="Radiolist-content">
                                <p>{this.state.radio[1].title}</p>
                                <p>{this.state.radio[1].describe}</p>
                            </div>
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
};

//我的歌单列表
class SongSheet extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            songSheet : props.Sheet.list,            //获取父级传下来的数据
            Sum : props.Sheet.Sum
        }
    };
    render (){
        var textArr = [];
        for (let i in this.state.songSheet)
        {
            var that = this.state.songSheet[i];
            textArr.push(
                <li key={i}>
                    <NavLink to={that.href}>
                        <div className="Sheet-left">
                            <img src={that.imgUrl} alt=""/>
                        </div>
                        <div className="Sheet-right">
                            <p>{that.title}</p>
                            <p>
                                <span className={that.download != 0 ? "download" : ""}></span>
                                <span>{that.sum}首</span>
                                {that.download != 0 ? <span>,{that.download}首已下载</span> : <span></span>}
                            </p>
                            <img className="rightArrow" src={require('../img/rightArrow.png')} alt=""/>
                        </div>
                    </NavLink>
                </li>
            )
        }
        return (
            <div className="souye-songSheet">
                <div className="songSheet-title">
                    <h3>我的歌单<span>{this.state.Sum == 0 ? "" : this.state.Sum}</span></h3>
                    <img src={require('../img/tarrow.png')} alt=""/>
                </div>
                <ul>
                    {textArr}
                </ul>
            </div>
        )
    };
};


//我的----页面
class My extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            //头像定义
            Head : {
                head : require('../img/head.jpg'),
                is_login : true,
                when_long : '1小时',
                name : 'foreach',
                green_brick : false
            },
            //列表
            list : {
                local : {
                    sum : 100                   //设置本地音乐歌曲数量
                },
                download : {
                    sum : 82                    //设置下载歌曲数量
                },
                lately : {
                    sum : 160                   //设置最近播放数量
                },
                love : {
                    sum : 200                   //设置我喜欢歌曲数量
                },
                MV : {
                    sum : 0                     //设置下载MV数量
                },
                purchase : {
                    sum : 0                     //设置已购音乐数量
                }
            },
            //电台列表
            Radiolist : {
                radio : [
                    {
                        imgurl : require('../img/cove.jpg'),
                        title : "个性电台",
                        describe : "来听听和[夜来香]一样好听的歌曲吧"
                    },
                    {
                        imgurl : require('../img/cove1.jpg'),
                        title : "NIKE跑步电台",
                        describe : "新增万首中文跑步歌曲，点燃你的2017!"
                    }
                ]
            },
            //我的歌单列表
            SongSheet : {
                list : [
                    {
                        imgUrl : require('../img/music_cove.jpg'),          //设置歌单封面
                        title : "我喜欢的英文歌曲",                            //设置歌单名称
                        sum : 26,                                               //设置歌单有多少首歌
                        download : 13,                                          //设置有多少首歌已经下载
                        href : "/",                                             //设置跳转路径
                    },
                    {
                        imgUrl : require('../img/music_cove1.jpg'),          //设置歌单封面
                        title : "从海底出击",                            //设置歌单名称
                        sum : 25,                                               //设置歌单有多少首歌
                        download : 0,                                          //设置有多少首歌已经下载
                        href : "/",                                             //设置跳转路径
                    },
                    {
                        imgUrl : require('../img/music_cove2.jpg'),          //设置歌单封面
                        title : "我最爱听",                            //设置歌单名称
                        sum : 20,                                               //设置歌单有多少首歌
                        download : 4,                                          //设置有多少首歌已经下载
                        href : "/",                                             //设置跳转路径
                    },
                    {
                        imgUrl : require('../img/music_cove3.jpg'),          //设置歌单封面
                        title : "Rammstein",                            //设置歌单名称
                        sum : 30,                                               //设置歌单有多少首歌
                        download : 0,                                          //设置有多少首歌已经下载
                        href : "/",                                             //设置跳转路径
                    },
                ],
                Sum : 9
            },
        };
    };
    changPlay (val){
        this.props.callbackParent(val);
    };
    render (){
        return (
            <div>
                <Head_portrait head={this.state.Head} />
                <List list={this.state.list} />
                <Radiolist radio={this.state.Radiolist.radio} callbackParent={this.changPlay.bind(this)} />
                <SongSheet Sheet={this.state.SongSheet} />
            </div>
        )
    };
}

//输出界面
class Souye extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            Stop : false,                                        //停止音乐馆里面的定时器
            is_action : "my",                                   //设置默认选中的界面
            Arr : "",                                            //设置变量来装当前是哪一个界面
            playControls : {
              name : "倩女幽魂",                                //设置音乐名称
              imgUrl : require('../img/music_cove.jpg'),      //设置音乐封面
              musicUrl : require('../mp3/倩女幽魂.mp3'),        //设置音乐
              is_play : false
            }
        };
    };
    componentWillMount (){
        this.switch("my");
    };
    changPlay (playControls){
        this.setState({
            playControls :playControls
        });
    };
    //页面之间的切换
    switch (val){
        this.setState({                         //赋值当前点击的是哪一个界面
            is_action : val,
        },function () {
            switch (val)
            {
                case "my" :
                    this.setState({
                        Arr : <My callbackParent={this.changPlay.bind(this)}/>
                    });
                    break;
                case "music" :
                    this.setState({
                        Arr : <Music stop={this.state.Stop} />
                    })
                    break;
                case "find" :
                    break;
                default :
                    this.setState({
                        Arr : <My callbackParent={this.changPlay.bind(this)}/>
                    });
                    break;

            }
        });
    };
    render (){
        return (
            <div className="body-souye">
                <div className="index_bottom">
                    <ul className="clear">
                        <li><a href="javascript:void(0)"></a></li>
                        <li><a href="javascript:void(0)" className={this.state.is_action == "my" ? "action" : ""} onClick={this.switch.bind(this,"my")}>我的</a></li>
                        <li><a href="javascript:void(0)" className={this.state.is_action == "music" ? "action" : ""} onClick={this.switch.bind(this,"music")}>音乐馆</a></li>
                        <li><a href="javascript:void(0)" className={this.state.is_action == "find" ? "action" : ""} onClick={this.switch.bind(this,"find")}>发现</a></li>
                        <li><NavLink to="/my" className="shiqu"></NavLink></li>
                    </ul>
                    <div><NavLink to="/my"><span></span>搜索</NavLink></div>
                </div>
                <div className="souye-content">
                    {this.state.Arr}
                </div>
                <Play playControls={this.state.playControls} />
            </div>
        )
    }
}


export default Souye;