var path  = require("path");

module.exports = {
  entry: "./src/App.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')    
  },
  module: {
    rules : [{
        test : / \. less $ / ,
        use : [{
          loader : ' style-loader ' // создает узлы стиля из строк JS 
        }, {
          loader : ' css-loader ' // переводит CSS в CommonJS 
        }, {
          loader : ' less-loader '  // компилирует Less to CSS 
        }] 
      }] 
  }
};
