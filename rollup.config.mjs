// rollup.config.mjs
import { rollup } from "rollup";
import copy from "rollup-plugin-copy"; 
import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
 
 

function filterPlugins(arr) {

  const internalFunctions = [
    copy({
      verbose: true,
      targets: [
        { src: './assets/build', dest: './dist/assets/' }
      ]
    }),
    nodeResolve(),
    commonjs()
 
  ];

  return internalFunctions.filter(func => arr.includes(func.name));
}
 
 
function buildAndroid(src, dist, name, chosenPlugins){
  return {
      input: src,
      output: { 
        file: dist,
        format: 'es',
        name: name
      },
      plugins: filterPlugins(chosenPlugins),
     external: ['@capacitor/core', '@capacitor/app',]
  }
}
 
 
export default [
 
  buildAndroid('./assets/js/main.js', './assets/build/bundle.min.js', 'testbuild', ['nodeResolve', 'commonjs', 'copy'])
 
]