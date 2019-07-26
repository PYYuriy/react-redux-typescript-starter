// development config
const merge = require('webpack-merge')
const webpack = require('webpack');
const path = require('path')

const commonConfig = require('./common.js')

module.exports = merge(commonConfig, {
    mode: 'development',
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ],
    devServer: {
        host: 'localhost',
        port: 3000,
        historyApiFallback: true,
        disableHostCheck: true,
        hot: true,
    },
})
