const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
            new HtmlWebpackPlugin({ template: path.resolve(__dirname, 'src', 'index.html') }),
            // new webpack.ProgressPlugin(),
        ],

        module: {
            rules: [
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
        },


    }
};