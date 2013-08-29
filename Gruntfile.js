/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        unused: true,
        boss: true,
        eqnull: true,
        browser: true,
        globals: {
          jQuery: true
        }
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      lib_test: {
        src: ['lib/**/*.js', 'test/**/*.js']
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    watch: {
      gruntfile: {
        files: '<%= jshint.gruntfile.src %>',
        tasks: ['jshint:gruntfile']
      },
      lib_test: {
        files: '<%= jshint.lib_test.src %>',
        tasks: ['jshint:lib_test', 'qunit']
      }
    },
    copy: {
      main: {
        files: [
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/otr/build/dep/**',
            ],
            dest: 'src/common/lib/dep/',
            filter: 'isFile'
          },
          {
            expand: true,
            flatten: true,
            src: [
              'bower_components/zepto/zepto.js', 
              'bower_components/otr/build/otr.js'
            ],
            dest: 'src/common/lib/',
            filter: 'isFile'
          }
        ]
      }
    },
    shell: {
      build: {
        command: 'G:\\Dev\\JS\\kango-framework-latest\\kango.py build "G:\\Dev\\OTR for Facebook"'
      }
    },
    clean: {
      build: ["src/common/lib/"],
      release: ["output/"]
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-shell');

  // Default task.
  grunt.registerTask('default', ['jshint', 'qunit']);
  grunt.registerTask('build', ['copy', 'shell', 'clean:build']);

};
