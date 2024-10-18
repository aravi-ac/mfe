const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { default: merge } = require("webpack-merge")
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8082,
        historyApiFallback: {
            index: '/index.html'
        },
    },
    output: {
        publicPath: 'http://localhost:8082/'
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'auth',
            filename: 'remoteEntry.js',
            exposes: {
                './AuthApp': './src/bootstrap'
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, devConfig)