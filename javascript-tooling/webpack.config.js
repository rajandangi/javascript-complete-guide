const { resolve, join } = require('path');
const CleanPlugin = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/app.js',
    output: {
        filename: 'app.js',
        path: resolve(__dirname, 'assets', 'scripts'),
        publicPath: 'assets/scripts/'
    },
    devtool: 'cheap-module-source-map',
    devServer: {
        devMiddleware: {
            writeToDisk: true,
        },
        static: {
            directory: join(__dirname, './'),
        },
    },
    plugins: [
        new CleanPlugin.CleanWebpackPlugin()
    ]
};