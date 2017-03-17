/**
 * Created by Administrator on 2017/3/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { hashHistory, Route, Router ,IndexRoute,Link} from 'react-router';
import Souye from 'js/souye.js';         //首页界面
ReactDOM.render((
    <Router history={hashHistory}>
        <Route path="/" component={Souye}>
            <IndexRoute component={Souye}/>
        </Route>
        <Route path="/find" component={Find}></Route>
        <Route path="/minutes" component={Minutes}></Route>
        <Route path="/news" component={News}></Route>
        <Route path="/my" component={My}></Route>
    </Router>
),document.getElementById("index"));