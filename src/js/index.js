/**
 * Created by Administrator on 2017/3/9.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();
import Souye from './souye.js';         //首页界面
import My from './my.js';               //测试数据流js
import '../css/index.less';

ReactDOM.render((
    <Router history={history}>
        <div className="body-index">
            <Route exact path="/" component={Souye}/>
            {/*<Route path="/my" component={My} />*/}
        </div>
    </Router>
),document.getElementById("index"));


