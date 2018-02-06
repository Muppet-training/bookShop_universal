const path = require('path');
const webpack = require('webpack');

//The resolve __dirname is going to get the out put and place it in a file called index_bundle.js in the dist foler in the root folder
module.exports = {
    entry: './src/client.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'env', 'stage-1']
                }
            }
        ]
    }
};
