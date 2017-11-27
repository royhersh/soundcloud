const config = require('./webpack.config');
const webpack = require('webpack');

delete config.devServer;
delete config.devtool;

config.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('production')
    })
);

module.exports = config;