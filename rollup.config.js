import json from 'rollup-plugin-json';

export default {
  input: 'src/core/index.js',
  output: {
    file: 'dist/library.js',
    format: 'es',
  },
  external: [
    'ext',
    'gl-matrix',
  ],
  plugins: [
    json(),
  ],
};