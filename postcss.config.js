/**
 * Created by Administrator on 2017/3/21.
 */
module.exports = {
    module: {
        rules: [
            {
                test: /\.less/,
                use: [
                    {
                        loader: 'postcss-loader',
                            options: {
                                plugins: function () {
                                    return [
                                        require('precss'),
                                        require('autoprefixer')
                                    ];
                                }
                            }
                    }
                ]
            }
        ]
    }
}