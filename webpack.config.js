var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './assets/js/index.js',

    output: {
        filename: 'bundle.js',
        publicPath: ''
    },

    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract('css!sass')
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('assets/css/style.css', {
            allChunks: true
        })
    ]
}
