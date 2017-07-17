module.exports = function(grunt) {
	grunt.initConfig({
		karma: {
		  unit: {
		    configFile: 'conf/karma.conf.js',
		    singleRun: true
		  }
		},
		protractor: {
		    e2e: {
		        options: {
                	configFile: 'conf/protractor.conf.js'        
                }       
            }    
        }, 
		clean: {
			temp: [
				'dist/js/libs.js',
				'dist/js/libs.min.js', 
				'dist/js/scripts.js', 
				'dist/js/scripts.min.js'
			],
			all: ['dist']
		},
		jshint: {
			options: {
				jshintrc: '.jshintrc'
			},
			dist: {
				src: [
					'src/js/**/*.js'
				]
			}
		},
		concat: {
			scripts: {
				src: [
					'src/js/**/*.js'
				],
				dest: 'dist/js/scripts.js'
			},
			libs: {
				src: [
					'src/bower/angular/angular.min.js'
				],
				dest: 'dist/js/libs.min.js'
			},
			all: {
				src: [
					'dist/js/libs.min.js',
					'dist/js/scripts.min.js'
				],
				dest: 'dist/js/all.min.js'
			}
		},
		uglify: {
			scripts: {
				src: ['dist/js/scripts.js'],
				dest: 'dist/js/scripts.min.js'
			}
		},
		cssmin: {
			all: {
				src: [
					'src/css/**/*.css'
				],
				dest: 'dist/css/styles.min.css'
			}
		},
		htmlmin: {
			options: { 
		        removeComments: true,
		        collapseWhitespace: true
      		},
			views: {
				expand: true,
				cwd: 'src/views',
				src: [
					'*.html'
				],
				dest: 'dist/view'
			}
		},
		copy: {
			all: {
				src: 'src/index-prod.html',
				dest: 'dist/index.html'
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');	
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-karma');
	grunt.loadNpmTasks('grunt-protractor-runner');

	grunt.registerTask('prod', ['karma', 'protractor', 'clean:all',
								 'jshint', 'concat:scripts', 'uglify',
							 	 'concat:libs', 'concat:all', 'cssmin',
						 	 	 'htmlmin', 'clean:temp', 'copy'
					 	 	 	]
			 	 	 );
};