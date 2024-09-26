const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const { default: merge } = require("webpack-merge")
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

const devConfig = {
    mode: 'development',
    devServer: {
        port: 8080,
        historyApiFallback: {
            index: 'index.html'
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: 'marketing@http://localhost:8081/remoteEntry.js'
            },
            shared: packageJSON.dependencies
        })
    ],
}

module.exports = merge(commonConfig, devConfig)