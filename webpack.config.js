const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');

const PATHS = {
    app: path.join(__dirname, "src"),
    build: path.join(__dirname, "build"),
    dist: path.join(__dirname, "dist"),
};

module.exports = {
    // Entries have to resolve to files! They rely on Node
    // convention by default so if a directory contains *index.js*,
    // it resolves to that.
    entry: {
        app: PATHS.app,
    },
    output: {
        path: PATHS.dist,
        /*filename: "[name].js",*/
        filename: '[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: "development",
        }),
    ],
    devServer: {
        // Display only errors to reduce the amount of output.
        stats: "errors-only",
        contentBase: './dist',
        // Parse host and port from env to allow customization.
        //
        // If you use Docker, Vagrant or Cloud9, set
        // host: options.host || "0.0.0.0";
        //
        // 0.0.0.0 is available to all network devices
        // unlike default `localhost`.
        host: process.env.HOST, // Defaults to `localhost`
        port: process.env.PORT, // Defaults to 8080
        // overlay: true is equivalent
        overlay: {
            errors: true,
            warnings: true,
        },
    },
};