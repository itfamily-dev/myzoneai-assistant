const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');

const postsCssLoader = {
    loader: "postcss-loader",
        options: {
            postcssOptions: {
            plugins: [
                [
                    "postcss-preset-env",
                    {
                        // Options
                    },
                ],
            ],
        },
    },
}

module.exports = {
    watch: true,
    mode: "development",
    entry: ['./resources/js/index.js', './resources/scss/style.scss'],
    output: {
        filename: "frontend.js",
        path: path.resolve(__dirname, "build"),
    },
    module: {
        rules: [
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" },
            {
               rules: [{
                    test: /\.(scss|css)$/,
                    use: [MiniCssExtractPlugin.loader, "css-loader", postsCssLoader,"sass-loader"]
                }],
            },
        ]
    },

    optimization: {
        // [...]
        minimize: true,
        minimizer: [
        // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
        // `...`,
            new CssMinimizerPlugin(),
        ],
    },

    plugins: [
        new ESLintPlugin({
            context: './resources/js',
        }),
        new MiniCssExtractPlugin({
            filename: 'frontend.css',
        }),
        new SVGSpritemapPlugin([
            'resources/svg-builder/**/*.svg',
        ],{
            output: {
                filename: 'sprite.svg',
                svgo: true,
            },
            sprite: {
                generate: {
                    use : true,
                    symbol: true,
                    title: false,
                    view: false,
                },
                prefix: false,
            }
        }),
    ],
};