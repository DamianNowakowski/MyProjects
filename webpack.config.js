module.exports = {
    entry: "./js/app.jsx",
    output: {filename: "./js/out.js"},
    devServer: {
      inline: true,
      contentBase: './',
      port: 3001
      },
    watch: true,//włączamy ta komendą watchera
    module: {
        loaders: [
          {
            test: /\.jsx$/,// dwa znaki "/" powodują, że mamy obserwować szystkie pliki z rozszerzeniem .jsx i dzięki znakowi $, wie gdzie zakończyć
            exclude: /node_modules/,//mówi nam co mamy ominąć podczas obserwacji
            loader: 'babel-loader',// mówimy, że za pomoca babela ma kompilowac pliki

                query: { presets: ['es2015', 'stage-2', 'react'] }//mówimy, aby używał presetów es2015(czyli ecma6) i react

        }]
    }
}
