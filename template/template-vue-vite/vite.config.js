const path = require('path');
const {defineConfig} = require('vite');
const {createVuePlugin} = require('vite-plugin-vue2');
const {injectHtml} = require('vite-plugin-html');
import ViteComponents from 'vite-plugin-components';
import styleImport from 'vite-plugin-style-import';

const {genLessOptions, genHtmlOptions} = require('./build/utils');
const resolve = (dir) => {
  return path.join(__dirname, '.', dir);
};
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  define: {
    'process.env': {
      '__TOOL_MODE__': 'vite'
    }
  },
  plugins: [
    createVuePlugin({
      jsx: true,
    }),
    injectHtml({
      injectData: genHtmlOptions('vite'),
    }),
    ViteComponents({
      transformer: 'vue2'
    }),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => {
            return `vant/es/${name}/style/index`;
          },
        },
      ]
    })
  ],
  css: {
    preprocessorOptions: {
      less: genLessOptions('vite'),
    },
  },
  resolve: {
    alias: [
      {
        // @/xxxx  =>  src/xxx
        find: /^@\//,
        replacement: resolve('src') + '/',
      },
      {
        find: /^utils/,
        replacement: resolve('node_modules/@winner-fed/cloud-utils/dist/cloud-utils.esm'),
      },
    ]
  },
});
