const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: "development",
        target: 'web',
        entry: './app/renderer.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'renderer.js',
            clean: true,
        },
        resolve: {
            extensions: ['.js', '.jsx'],
        },
        module: {
            rules: [
                {
                    test: /\.jsx?$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            exclude: /node_modules/,
                            presets: ['@babel/preset-react']
                        }
                    }
                }
            ]
        },
        plugins: [
            new CopyPlugin({
                patterns: [
                    { from: 'resources/images', to: 'static/images' },
                    { from: 'resources/bootstrap', to: 'static/bootstrap' },
                ],
            }),
            new HtmlWebpackPlugin({
                template: './app/index.html',
                filename: 'index.html',
                title: 'LaTeX 公式助手'
            })
        ],
    }
]
