module.exports = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: './client/index.tsx',
    output: {
      filename: 'bundle.js',
      path: __dirname + '/public/build'
    },
    module: {
      rules: [
        {
          loader: 'ts-loader',
          exclude: /(node_modules)/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    }
  }
