const path = require('path');

module.exports = {
    entry: ['./src/js/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './dist'
    },
<<<<<<< HEAD
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './src/index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
=======
>>>>>>> parent of e39f0f3... htmlwebpack
};
