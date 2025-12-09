const zl = require('zip-lib');

const info = require('../package.json');

const name = info.name.split('/').pop();

const filepath = `./dist/${name}-${info.version}-heat.lcp`;

zl.archiveFolder('./heatself', filepath).then(
  function () {
    console.log('done');
  },
  function (err) {
    console.log(err);
  }
);
