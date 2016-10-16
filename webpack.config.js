const path = require('path');

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
    }
};