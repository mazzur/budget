const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
      path: './dist',
      filename: 'bundle.js'
    },
    devtool: "#inline-source-map",
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname + '/index.html'),
        filename: 'index.html',
        inject: 'body'
      })
    ]
};