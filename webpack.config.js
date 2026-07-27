const path = require('path')
const CopyPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [
    {
        mode: 'development',
        entry: './app/main.js',
        target: 'electron-main',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'main.js'
        },
        module: {
            rules: [
                {
                    test: /native_modules[/\\].+\.node$/,
                    use: 'node-loader',
                },
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/,
                    use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
                }
            ],
        }
    },
    {
        mode: 'development',
        entry: './app/preload.js',
        target: 'electron-preload',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'preload.js'
        },
        module: {
            rules: [] // 预加载脚本一般用纯 JS，不需要 loader
        }
    },
    {
        mode: "development",
        target: 'web',
        entry: './app/renderer.js',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'renderer.js'
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
                    { from: 'resources/mathjax', to: 'static/mathjax' },
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
