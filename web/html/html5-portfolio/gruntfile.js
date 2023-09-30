module.exports = (grunt) => {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                loadPath: ['node_modules/foundation-sites/scss'],
                style: 'compressed',
            },
            dist: {
                files: {
                    'css/style.css': 'src/scss/main.scss',
                },
            },
        },
        uglify: {
            jsSrc: {
                files: {
                    'public/js/main.js': [
                        'src/js/jquery.js',
                        'src/js/aos.js',
                        'node_modules/blazy/blazy.js',
                        'src/js/portfolio.js',
                    ]
                }
            }
        },
        watch: {
            sass: {
                files: ['src/scss/**/**.scss'],
                tasks: ['sass']
            },
            uglify: {
                files: [
                    'src/js/**/**.js',
                    'gruntfile.js'
                ],
                tasks: ['uglify']
            }
        },
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('watchers', ['sass', 'uglify', 'watch']);
};
