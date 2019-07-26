// production config
const merge = require('webpack-merge')
const commonConfig = require('./common.js')
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(commonConfig, {
    mode: 'production',
    optimization: {
        minimize: true,
        nodeEnv: 'production',
    },
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, '../dist'),
        publicPath: './',
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: './robots.txt', to: './' },
        ]),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
})
