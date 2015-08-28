module.exports = function(grunt) {

    grunt.initConfig({
        babel: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'jef_ajax.js': 'jef_ajax.es6'
                }
            }
        },

        uglify: {
            options: {
                compress: {
                    drop_console: true
                }
            },
            scripts: {
                files: {
                    'jef_ajax.min.js': 'jef_ajax.js'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default', [
        'babel',
        'uglify'
    ]);

};