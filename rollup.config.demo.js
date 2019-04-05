import babel from 'rollup-plugin-babel';
import { uglify } from 'rollup-plugin-uglify';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import postcss from 'rollup-plugin-postcss';
import simplevars from 'postcss-simple-vars';

export default {
  input: 'src/ext/demo.js',
  output: [{
    file: 'docs/js/bundle.js',
    format: 'es',
  }, {
    file: 'docs/js/bundle-iife.js',
    name: 'test',
    format: 'iife',
  }],
  plugins: [
    postcss({
      plugins: [
        simplevars(),
      ],
      extensions: ['.css'],
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: [
          'node_modules',
          'vendor',
          'dist',
        ],
      },
    }),
    commonjs(),
    babel(),
    uglify(),
  ],
};