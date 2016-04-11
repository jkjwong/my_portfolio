module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			compile: {
				options: {
					outputStyle: 'compressed'
				},
				files: {
					'css/style.min.css': 'css/style.scss'
				}
			},
			devAll: {
				options: {
					outputStyle: 'expanded'
				},
				files: {
					'css/style.css': 'css/style.scss'
				}
			}
		},
		autoprefixer: {
			production: {
				options: {
					browsers: ['last 5 versions', 'ie 8', 'ie 9']
				},
				src: './css/style.min.css',
				dest: './css/style.min.css'
			},
			development: {
				options: {
					browsers: ['last 5 versions', 'ie 8', 'ie 9']
				},
				src: './css/style.min.css',
				dest: './css/style.min.css'
			}
		},
		uglify: {
			dist: {
				options: {
					mangle: true,
					compress: true
				},
				files: {
					'app/main.min.js': [
						'lib/angular/angular.min.js',
						'lib/angular/angular-ui-router.min.js',
						'lib/angular/angular-animate.min.js',

						'app/app.js',

						'app/services/routes.service.js',
						'app/services/data.service.js',
						'app/services/constants.service.js',

						'app/controllers/work.controller.js',
						'app/controllers/project.controller.js'
					]
				}
			}
		},
		watch: {
			build: {
				files: ['css/*.scss', 'css/**/*.scss'],
				tasks: ['sass:compile','autoprefixer:production','notify']
			},
			scripts: {
				files: ['app/*.js', 'app/**/*.js'],
				tasks: ['uglify'],
				options: {
					spawn: false
				}
			}
		},
		notify: {
			watch: {
				options: {
					spawn: false,
					title: 'Task Complete',
					message: 'SCSS finished compiling'
				}
			}
		}
	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-notify');

	// Default task(s).
	grunt.registerTask('default', ['sass:compile', 'sass:devAll', 'uglify:dist', 'notify:watch']);

};