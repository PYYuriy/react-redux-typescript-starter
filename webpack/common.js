const { CheckerPlugin } = require('awesome-typescript-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/App",
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: ["awesome-typescript-loader", "tslint-loader"]
            },
            {
                enforce: "pre",
                test: /\.js$/, loader: "source-map-loader"
            }
        ]
    },
    plugins: [
        new CheckerPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
        }),
    ],
    performance: {
        hints: false,
    },
};
