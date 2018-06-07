exports.config = {
  baseUrl: 'stencil-vue-example',
  autoprefixer: [
    '> 1%',
    'last 2 versions',
    'IE 11'
  ],
  namespace: 'stencil-vue-example',
  outputTargets: [{
    type: 'www'
  }, {
    type: 'dist'
  }],
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
};