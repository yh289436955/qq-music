/**
 * Created by Administrator on 2017/3/21.
 */
import React from 'react';
// import {NavLink} from 'react-router-dom';
class PlayControl extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            playControls : props.playControls,
            is_play : true
        }
    };
    //播放和暂停控制
    play (){
        var audio = document.getElementById("audio");
        //判断是否播放音乐
        if (this.state.is_play)
        {
            audio.play();
            this.setState({
                is_play: false
            })
        }
        else
        {
            audio.pause();
            this.setState({
                is_play : true
            })
        }
    };
    componentWillReceiveProps (nextProps){
        this.setState({
            playControls: nextProps.playControls,
        },function () {
            //判断父级传来的值发生改变后才进行播放
            if (nextProps.playControls.is_play)
            {
                this.setState({
                    is_play : true
                },function () {
                    this.play();
                });

            }
        });
    };
    render (){
        return (
            <div className="Play-Control clear">
                <div className="Control-left clear">
                    <div className="Control-cove">
                        <img src={this.state.playControls.imgUrl} alt=""/>
                    </div>
                    <div className="Control-name">
                        <p>{this.state.playControls.name}</p>
                        <p>左右滑动切换歌曲</p>
                    </div>
                </div>
                <div className="Control">

                    <a href="javascript:void(0)" className={this.state.is_play == true ? "playControl" : "suspendControl"} onClick={this.play.bind(this)}></a>
                    <a href="javascript:void(0)" className="musicList"></a>
                </div>
                <audio id="audio" src={this.state.playControls.musicUrl} preload={true}  ></audio>
            </div>
        )
    }
};


export default PlayControl;          //抛出去