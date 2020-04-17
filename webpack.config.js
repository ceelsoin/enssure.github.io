var HtmlWebpackPlugin = require('html-webpack-plugin');
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({ template: 'index.html' });
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: "./src/app.js",
    module: {
      loaders: [
        {
          test: /\.js?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader'],
        },
        {
        test: /\.(png|jp(e*)g|svg)$/,  
        use: [{
            loader: 'file-loader',
            options: { 
                // limit: 8000, // Convert images < 8kb to base64 strings
                name: "[name].[hash].[ext]",
                esModule: false,

            } 
        }]
       }
      ]
    },
    output: {
      path: __dirname + '/build',
      filename: 'app.bundle.js'
    },
    devtool: 'source-map',
    plugins: [HTMLWebpackPluginConfig],
    devServer: {
      overlay: true
    }
}