# npm init
npm init <<!
echo
0.0.0
echo
dist/index.js
ava
echo
echo
echo
!

# install ava
npx ava --init;
# dev dependencies
npm i -D eslint nodemon nsp nyc babel-preset-env babel-cli changelog-generator esw husky;
# dependencies
npm i -S lodash;
# gitignore
npx gitignore node

# babelrc file
echo '{
  "presets": ["env"]
}' >.babelrc

# edit package.json file

node <<EOF
//Read data
var pkg = require('./package.json');

//Manipulate data
pkg.scripts.build="babel src -d dist"
pkg.scripts.building="babel src -d dist"
pkg.scripts.testing="NODE_ENV=test ava --watch"
pkg.scripts.version="version"= "changelog; git add CHANGELOG.md"
pkg.scripts.lint="esw --clear"
pkg.ava = {
  require: "babel-register",
  babel: "inherit"
}

//Output data
console.log(JSON.stringify(data));

EOF
npx eslint --init
