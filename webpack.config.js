/**
 * Created by Administrator on 2017/3/17.
 */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
    //入口文件
    entry : {
        index :  __dirname + '/src/js/index.js',
    },
    //编译后出口文件
    output : {
        path :  __dirname + '/buit',
        filename : 'js/[name].js'
    },
    //模板
    module : {
        loaders : [
            //babel翻译
            {
                test : /\.js$/,
                exclude : path.resolve(__dirname,'node_modules'),
                loader : 'babel-loader'
            },
            //css样式
            {
                test : /\.less/,
                loader: ExtractTextPlugin.extract({
                    fallback : "style-loader",
                    use :   "css-loader!less-loader"
                })
            },
            //图片路径
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192&name=img/[name].[ext]'
            }
        ]
    },
    //本地服务器配置
    devServer : {
        contentBase : './buit',      //本地服务器所加载的页面所在的目录
        historyApiFallback : true,      //单页开发不跳转
        inline : true,                    //实时刷新
        hot : true,
    },
    //插件
    plugins : [
        // 开启全局的模块热替换（HMR）
        new webpack.HotModuleReplacementPlugin(),
        new ExtractTextPlugin("css/[name].css"),//则会生成一个less文件
        // 当模块热替换（HMR）时在浏览器控制台输出对用户更友好的模块名字信息
        new webpack.NamedModulesPlugin(),

    ],
}