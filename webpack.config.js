const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: './src/index.js',
    },
    output: {
        filename: '[name]-bundle.js',
        assetModuleFilename: 'assets/[hash][ext][query]',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        clean: true,
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].html',
                        },
                    },
                    {
                        loader: 'extract-loader',
                    },
                    {
                        loader: 'html-loader',
                    },
                ],
            },
            {
                test: /\.pug$/,
                use: {
                    loader: 'pug-loader',
                },
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        'postcss-preset-env',
                                        {},
                                    ]
                                ],
                            },
                        }
                    },
                    'sass-loader',
                ],
            },
            {
                test: /\.(woff|woff2|svg|ttf)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
        ],
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.pug',
        }),
        new MiniCssExtractPlugin(),
    ],
}