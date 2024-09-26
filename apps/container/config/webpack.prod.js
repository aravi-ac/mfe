const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin")
const { default: merge } = require("webpack-merge")
const commonConfig = require('./webpack.common')
const packageJSON = require('../package.json')

const domain = process.env.PRODUCTION_DOMAN

const prodConfig = {
    mode: 'production',
    output: {
        filename: `[name].[contenthash].js`,
        publicPath: `/container/latest/`
    },
    plugins: [
        new ModuleFederationPlugin({
            name: 'container',
            remotes: {
                marketing: `marketing@${domain}/marketing/remoteEntry.js`
            },
            shared: packageJSON.dependencies
        })
    ]
}

module.exports = merge(commonConfig, prodConfig)