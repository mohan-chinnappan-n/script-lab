var shell = require('shelljs')

var { TRAVIS_BRANCH } = process.env // from travis

var REACT_APP_STAGING = {
  deployment: 'alpha',
  beta: 'beta',
  production: 'production',
}[TRAVIS_BRANCH]

shell.exec(`set REACT_APP_STAGING=${REACT_APP_STAGING}`)
shell.exec(`react-scripts-ts build`)