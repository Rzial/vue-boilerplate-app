const { mergeWithCustomize: merge, unique } = require('webpack-merge');

const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const CssExtractPlugin = require('mini-css-extract-plugin');
const CssExtractLoader = CssExtractPlugin.loader;

const common = require('../webpack.config');

module.exports = merge({
    customizeArray: unique(
        'plugins',
        ['MiniCssExtractPlugin'],
        (plugin) => plugin.constructor && plugin.constructor.name,
    ),
})(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: CssExtractLoader,
                        options: {
                            publicPath: '',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
            {
                test: /\.scss$/,
                use: [
                    'css-hot-loader',
                    {
                        loader: CssExtractLoader,
                        options: {
                            publicPath: '',
                        },
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true,
                        },
                    },
                ],
            },
        ],
    },

    optimization: {
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    chunks: 'all',

                    name(...args) {
                        const module = args[0];
                        const packageName = module.context.match(
                            /[\\/]node_modules[\\/](.*?)([\\/]|$)/,
                        )[1];

                        if (packageName === 'sockjs-client') {
                            return 'watch';
                        }

                        return common.optimization.splitChunks.cacheGroups.vendors.name(
                            ...args,
                        );
                    },
                    enforce: true,
                },
            },
        },
    },

    plugins: [
        new BundleAnalyzerPlugin({
            analyzerHost: '0.0.0.0',
            analyzerPort: '8090',
            openAnalyzer: false,
        }),
        new CssExtractPlugin({
            filename: '[name].css',
        }),
    ],
});
