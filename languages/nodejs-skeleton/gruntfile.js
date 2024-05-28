module.exports = (grunt) => {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      run: {
        cmd: 'npm start',
      }
    },
    sass: {
      options: {
        loadPath: ['node_modules/foundation-sites/scss']
      },
      dist: {
        files: {
          'public/css/main.css': 'public/css/src/main.scss',
        },
      },
    },
    jshint: {
      files: [
        'gruntfile.js',
        'app.js',
        'tests.js',
        'actions/**/**.js',
        'bin/**/**.js',
        'models/**/**.js',
        'public/js/src/app/**/**.js',
        'config/**/**.js',
        'routes/**/**.js',
        'spec/**/**.js',
      ],
      options: {
        esversion: 6,
        globals: {
          jQuery: true
        }
      }
    },
    uglify: {
      jsSrc: {
        files: {
          'public/js/main.js': [
            'public/js/src/vendor/**/**.js',
            'public/js/src/app/**/**.js',
          ]
        }
      }
    },
    watch: {
      jshint:{
        files: ['<%= jshint.files %>'],
        tasks: ['jshint']
      },
      sass: {
        files: ['public/css/src/**/**.scss'],
        tasks: ['sass']
      },
      uglify: {
        files: [
          'public/js/src/vendor/**/**.js',
          'public/js/src/app/**/**.js',
        ],
        tasks: ['uglify']
      }
    }
  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('watchers', ['jshint', 'sass', 'watch', 'uglify']);
  grunt.registerTask('start-server', ['exec:run']);
};
