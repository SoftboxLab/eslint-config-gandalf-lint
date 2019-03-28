module.exports = {
  extends: [
    'standard',
    './rules/gandalf'
  ].map(require.resolve),
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module'
  },
  rules: {
    'class-methods-use-this': 0
  }
}
