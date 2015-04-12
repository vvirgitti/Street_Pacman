/*global module:false*/
module.exports = function(grunt) {

  'use strict';

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    meta : {
      banner : '/*!\n' +
      ' * GMaps.js v<%= pkg.version %>\n' +
      ' * <%= pkg.homepage %>\n' +
      ' *\n' +
      ' * Copyright <%= grunt.template.today("yyyy") %>, <%= pkg.author %>\n' +
      ' * Released under the <%= pkg.license %> License.\n' +
      ' */\n\n'
    },

    concat: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: [
          'lib/gmaps.core.js',
          'lib/gmaps.controls.js',
          'lib/gmaps.markers.js',
          'lib/gmaps.overlays.js',
          'lib/gmaps.geometry.js',
          'lib/gmaps.layers.js',
          'lib/gmaps.routes.js',
          'lib/gmaps.geofences.js',
          'lib/gmaps.static.js',
          'lib/gmaps.map_types.js',
          'lib/gmaps.styles.js',
          'lib/gmaps.streetview.js',
          'lib/gmaps.events.js',
          'lib/gmaps.utils.js',
          'lib/gmaps.native_extensions.js'
          ],
        dest: 'gmaps.js'
      }
    },

    jasmine: {
      options: {
        template: 'test/template/jasmine-gmaps.html',
        specs: 'test/spec/*.js',
        vendor: ['https://code.jquery.com/jquery-2.1.3.min.js','http://maps.google.com/maps/api/js?sensor=true'],
        styles: 'test/style.css'
      },
      src : [
          'lib/gmaps.core.js',
          'lib/gmaps.controls.js',
          'lib/gmaps.markers.js',
          'lib/gmaps.overlays.js',
          'lib/gmaps.geometry.js',
          'lib/gmaps.layers.js',
          'lib/gmaps.routes.js',
          'lib/gmaps.geofences.js',
          'lib/gmaps.static.js',
          'lib/gmaps.map_types.js',
          'lib/gmaps.styles.js',
          'lib/gmaps.streetview.js',
          'lib/gmaps.events.js',
          'lib/gmaps.utils.js',
          'lib/gmaps.native_extensions.js',
          'public/js/player.js',
          'public/js/pellet.js',
          'public/js/*.js'
          ] 
    },

    watch : {
      files : '<%= jasmine.src %>',
      tasks : 'default'
    },

    jshint : {
      all : ['Gruntfile.js', 'public/js/*.js']
    },

    umd : {
      all : {
        src : 'gmaps.js',
        objectToExport : 'GMaps',
        amdModuleId : 'GMaps',
        globalAlias : 'GMaps',
        template : 'umd.hbs'
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-umd');

  grunt.registerTask('test', ['jshint', 'jasmine']);
  grunt.registerTask('default', ['test', 'concat', 'umd']);
};