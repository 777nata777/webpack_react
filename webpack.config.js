const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require('webpack');


module.exports = (env) => {

    return {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.js'),
        output: {
            path: path.resolve(__dirname, 'build'),
                filename: 'bundle.js',
                clean: true
        },

        plugins: [
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }), // для генерации HTML-файла
            new webpack.ProgressPlugin(), // при build видим процент загрузки
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }),

        ],

        module: {
            rules: [
                {
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource',
                },
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        "css-loader"
                    ],
                },
                // CSS Modules для SCSS
                {
                    test: /\.module\.s[ac]ss$/i,
                    use: [
                        MiniCssExtractPlugin.loader,
                        {
                            loader: "css-loader",
                            options: {
                                modules: {
                                    localIdentName: "[path][name]__[local]--[hash:base64:5]",
                                },
                            },
                        },
                        "sass-loader",
                    ],
                },
                // Обычные SCSS (без модулей)
                {
                    test: /\.s[ac]ss$/i,
                    exclude: /\.module\.s[ac]ss$/i,
                    use: [
                        // Creates `style` nodes from JS strings
                        MiniCssExtractPlugin.loader,
                        // Translates CSS into CommonJS
                        "css-loader",
                        // Compiles Sass to CSS
                        "sass-loader",
                        ],
                },

                {
                    test: /\.(js|jsx)$/, // Для файлов .js и .jsx
                    use: {
                        loader: 'babel-loader', // Устанавливаем babel-loader
                    },
                    exclude: /node_modules/, // Исключаем node_modules
                },
            ],
        },

        resolve: {
            extensions: ['.js', '.jsx'], // Автоматически подставлять эти расширения
            alias: {
                '@components': path.resolve(__dirname, 'src/components'),
                '@pages': path.resolve(__dirname, 'src/pages'),
                '@styles': path.resolve(__dirname, 'src/styles'),
                '@utils': path.resolve(__dirname, 'src/utils'),
            }

        },

        devtool: 'inline-source-map', // отслеживаем ошибки

        devServer: {
            port: 4000,
            open: true,
            hot: true,
            historyApiFallback: true // важно для работы с React Router
        }
    }
};