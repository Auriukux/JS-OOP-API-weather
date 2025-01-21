let mix = require('laravel-mix');
const webpack = require('webpack'); 

require('dotenv').config();

mix.js('src/js/main.js', 'public/js')
    .sass('src/scss/style.scss', 'css')
    .setPublicPath('public');

mix.webpackConfig({
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                OPEN_WEATHER_API_KEY: JSON.stringify(process.env.OPEN_WEATHER_API_KEY),
            },
        }),
    ],
});