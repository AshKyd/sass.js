module.exports = function GruntfileClean(grunt) {
  'use strict';

  grunt.config('copy', {
    main: {
      files: [{ expand: true, flatten:true, src:['libsass/libsass/lib/*.wasm'], dest: 'dist/'}],
    },
  });

};
