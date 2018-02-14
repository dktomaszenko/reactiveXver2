const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');


module.exports = {
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Production',
            template: './src/index.html'
        }),
        new webpack.ProvidePlugin({
            $: "jquery", // Used for Bootstrap JavaScript components
            jQuery: "jquery", // Used for Bootstrap JavaScript components
            Popper: ['popper.js', 'default'] // Used for Bootstrap dropdown, popup and tooltip JavaScript components
        })
    ]
};