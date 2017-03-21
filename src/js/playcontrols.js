/**
 * Created by Administrator on 2017/3/21.
 */
import React from 'react';
// import {NavLink} from 'react-router-dom';
class PlayControl extends React.Component {
    constructor (props){
        super(props);
        this.state = {
            music : props.playControls
        }
    }
    render (){
        // var textArr = [];
        // for (let i in this.state.music)
        // {
        //     let that = this.state.music[i];
        //     textArr.push(
        //         <div className="Control-left" key={i}>
        //             <div className="Control-cove">
        //                 <img src={that.imgUrl} alt=""/>
        //             </div>
        //             <div className="Control-name">
        //                 <p>{that.name}</p>
        //                 <p>左右滑动切换歌曲</p>
        //             </div>
        //         </div>
        //     )
        // }
        return (
            <div className="Play-Control clear">
                <div className="Control-left clear">
                    <div className="Control-cove">
                        <img src={this.state.music.imgUrl} alt=""/>
                    </div>
                    <div className="Control-name">
                        <p>{this.state.music.name}</p>
                        <p>左右滑动切换歌曲</p>
                    </div>
                </div>
                <div className="Control">
                    <a href="javascript:void(0)" className="playControl"></a>
                    <a href="javascript:void(0)" className="musicList"></a>
                </div>
                <audio id="audio" src={this.state.music.musicUrl}></audio>
            </div>
        )
    }
};

export default PlayControl;          //抛出去