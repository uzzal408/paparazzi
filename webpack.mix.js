const mix = require('laravel-mix');


const purgecss = require('@fullhuman/postcss-purgecss')({

    // Specify the paths to all of the template files in your project
    content: [
        './resource/**/*.blade.php',
        './resource/**/*.vue',
        './resource/**/*.jsx',
        // etc.
    ],

    // Include any special characters you're using in this regular expression
    defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
})

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/js/app.js', 'public/js')
   .postCss('resources/css/app.css', 'public/css',[
       require('tailwindcss'),
       ... mix.inProduction() ? [purgecss] : [],
       require('autoprefixer')
   ]);

mix.webpackConfig({
    resolve: {
       alias: {
           '@components' : path.resolve(__dirname,'resources/js/components')
       }
    }
});

mix.disableSuccessNotifications();

if(mix.inProduction()){
    mix.version();
}else{
    mix.sourceMaps();
}
