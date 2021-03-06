//entry -> output 

const path = require('path');


module.exports = {
    entry: './public/src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
       rules: [{
           loader: 'babel-loader',
           test: /\.js$/,
           exclude: /nose_modules/
       }] 
    },
    devtool:'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public')
    }
};