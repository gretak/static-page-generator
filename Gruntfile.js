module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        assemble: {
            options: {
                //flatten: true,
                partials: ['src/partials/**/*.hbs'],
                layout: "default.hbs",
                data: ['src/data/*.{json,yml}'],
                layoutdir: 'src/layouts/'
            },
            site: {
                expand: true,
                cwd: "src/pages",
                src: ['./**/*.hbs'],
                dest: "public"+''
            }

        }
    });
    grunt.loadNpmTasks('grunt-assemble');
    //grunt.loadNpmTasks('grunt');

    grunt.registerTask('default', ['assemble']);
};