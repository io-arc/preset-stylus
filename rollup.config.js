import typescript from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import pkg from './package.json'
import nodeResolve from '@rollup/plugin-node-resolve'

export default {
  input: 'lib/index.ts',

  output: {
    file: 'bin/index.js',
    format: 'commonjs',
    indent: false,
    name: 'ioArcPresetStylus',
    sourcemap: false,
    banner: `#!/usr/bin/env node
/*!
@io-arc/preset-stylus
${pkg.description}

Version: ${pkg.version}
License: ${pkg.license}
Document: ${pkg.homepage}

Copyright (c) 2020-${pkg.year} ${pkg.author}
*/`
  },

  external: ['update-notifier', 'commander', 'cpx', 'kleur'],

  plugins: [
    nodeResolve(),
    json({
      preferConst: true,
      indent: ' ',
      compact: true
    }),
    typescript({
      useTsconfigDeclarationDir: true
    }),
    terser()
  ]
}
