module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                partials: ['src/partials/**/*.hbs'],
                layout: "default.hbs",
                data: ['src/data/*.{json,yml}'],
                helpers: ['src/helpers/**/*.js'],
                layoutdir: 'src/layouts/'
            },
            site: {
                expand: true,
                cwd: "src/pages",
                src: ['./**/*.hbs'],
                dest: "public"
            }

        },
        sass: {
            options: {
                sourceMap: true
            },
            dist: {
                files: {
                    'public/styles.css': 'src/scss/styles.scss'
                }
            }
        },
        copy: {
            main: {
              files: [
              {
                expand: true,
                cwd: 'src/assets',
                src: ['./**/*', '!./img/**/*'],
                dest: 'public/assets/'
             },
            ],
        },
    },
    browserify: {
          dist: {
            options: {
               transform: [['babelify', {presets: ['es2015']}]]
           },
           src: ['src/js/scripts.js'],
           dest: 'public/js/scripts.js'
       }
   }
});
    grunt.loadNpmTasks('grunt-assemble');
    grunt.loadNpmTasks('grunt-newer'); // Only modifies new files
    grunt.loadNpmTasks('grunt-sass'); //Sass
    grunt.loadNpmTasks('grunt-scss-lint');//scsslint
    grunt.loadNpmTasks('grunt-contrib-copy'); // Copy
    grunt.loadNpmTasks('grunt-browserify'); //Browserify



    grunt.registerTask('default', ['assemble', 'sass', 'copy', 'browserify']);
};