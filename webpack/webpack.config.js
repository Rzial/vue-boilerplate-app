require('dotenv').config();

const { join } = require('path');

const CssExtractPlugin = require('mini-css-extract-plugin');
const DotenvPlugin = require('dotenv-webpack');
const HtmlPlugin = require('html-webpack-plugin');
const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

const {
    PROJECT_PATH,

    SRC_PATH,
    RES_PATH,

    DIST_PATH,
} = require('./utils/paths');

module.exports = {
    entry: join(SRC_PATH, 'main.ts'),
    output: {
        path: DIST_PATH,
        filename: '[name].[fullhash].js',
    },

    resolve: {
        extensions: ['.ts', '.js'],
        plugins: [
            new TsConfigPathsPlugin({
                baseUrl: PROJECT_PATH,
            }),
        ],
    },

    stats: {
        children: false,
        modules: false,
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.pug$/,
                oneOf: [
                    {
                        resourceQuery: /^\?vue/,
                        use: ['pug-plain-loader'],
                    },
                    {
                        use: ['pug-loader'],
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {
                test: /\.(png|jpe?g|gif|ttf|woff)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[path][name].[ext]?[hash]',
                            esModule: false,
                        },
                    },
                ],
            },
        ],
    },

    optimization: {
        runtimeChunk: {
            name: 'runtime',
        },
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',

                    name(module) {
                        if (module.constructor.name !== 'CssModule') {
                            return 'vendors';
                        }

                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                        )[1];

                        switch (packageName) {
                            case 'reset-css':
                            case 'element-plus':
                                return `vendors.${packageName}`;
                            default:
                                return 'vendors';
                        }
                    },
                    enforce: true,
                },
            },
        },
    },

    plugins: [
        new DotenvPlugin(),
        new VueLoaderPlugin(),
        new HtmlPlugin({
            template: join(RES_PATH, 'index.pug'),
            inject: false,

            chunksSortMode: 'none',
            env: process.env || {},
        }),
        new CssExtractPlugin({
            filename: '[name].[fullhash].css',
        }),
    ],
};
