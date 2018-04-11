// pluginOptions.karma
module.exports = {
  /**
   * Files containing tests. These will be preprocessed with webpack and
   * then loaded into karma.
   */
  files: [
    'tests/**/*.spec.js',
    'tests/**/*.spec.ts',
  ],

  /**
   * If provided, this will be merged into the base karma config for
   * the plugin.
   * 
   * See: https://github.com/webpack-contrib/karma-webpack and
   * http://karma-runner.github.io/2.0/config/configuration-file.html
   */
  karmaConfig: undefined
}