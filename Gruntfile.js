module.exports = function(grunt) {

  // Add the grunt-mocha-test tasks.
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.initConfig({
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'spec',
          require: 'test/spec/node-setup.js',
          clearRequireCache: true
        },
        src: ['test/spec/*.js']
      }
    }
  });

  grunt.registerTask('default', 'mochaTest');

};
