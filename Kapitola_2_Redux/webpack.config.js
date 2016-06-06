module.exports = {
    entry: "./src/index.js",  //náš vstupní bod apliace
    output: {
        filename: "bundle.js"   //výstupní bundle
    },
    module: {
        loaders: [
            {
                test: /\.js?/,    //Všechny soubory s koncovkou js...
                exclude: /(node_modules)/,  //s výjimkou adresáře node modules...
                loader: 'babel-loader',  //prožeň babel-loaderem (integrace babelu a webpacku)
                query: {
                    presets: ['react', 'es2015'], //vybrané babel presety: https://babeljs.io/docs/plugins/#presets
                    plugins: ["transform-class-properties"] //další vybrané pluginy https://babeljs.io/docs/plugins/#transform-plugins
                }
            }
        ]
    }
};
