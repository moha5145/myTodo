/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js

const { configure } = require('quasar/wrappers');

module.exports = configure(function (/* ctx */) {
  return {
    // https://quasar.dev/quasar-cli/supporting-ts
    supportTS: false,

    // https://quasar.dev/quasar-cli/prefetch-feature
    // preFetch: true,

    // app boot file (/src/boot)
    // --> boot files are part of "main.js"
    // https://quasar.dev/quasar-cli/boot-files
    boot: [
      'i18n',
    ],

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
    css: [
      'app.css'
    ],

    // https://github.com/quasarframework/quasar/tree/dev/extras
    extras: [
      // 'ionicons-v4',
      // 'mdi-v5',
      // 'fontawesome-v5',
      // 'eva-icons',
      // 'themify',
      // 'line-awesome',
      // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

      'roboto-font', // optional, you are not bound to it
      'material-icons', // optional, you are not bound to it
    ],

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
    build: {
      vueRouterMode: 'hash', // available values: 'hash', 'history'

      // transpile: false,

      // Add dependencies for transpiling with Babel (Array of string/regex)
      // (from node_modules, which are by default not transpiled).
      // Applies only if "transpile" is set to true.
      // transpileDependencies: [],

      // rtl: false, // https://quasar.dev/options/rtl-support
      // preloadChunks: true,
      // showProgress: false,
      // gzip: true,
      // analyze: true,

      // Options below are automatically set depending on the env, set them if you want to override
      // extractCSS: false,

      // https://quasar.dev/quasar-cli/handling-webpack
      // "chain" is a webpack-chain object https://github.com/neutrinojs/webpack-chain
      chainWebpack (/* chain */) {
        //
      },
    },

    // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
    devServer: {
      https: false,
      port: 8080,
      open: true // opens browser window automatically
    },

    // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
    framework: {
      config: {},

      // iconSet: 'material-icons', // Quasar icon set
      // lang: 'en-US', // Quasar language pack

      // For special cases outside of where the auto-import stategy can have an impact
      // (like functional components as one of the examples),
      // you can manually specify Quasar components/directives to be available everywhere:
      //
      // components: [],
      // directives: [],

      // Quasar plugins
      plugins: []
    },

    // animations: 'all', // --- includes all animations
    // https://quasar.dev/options/animations
    animations: [
      'fadeIn',
      'fadeOut'
    ],

    // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
    ssr: {
      pwa: false
    },

    // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
    pwa: {
      workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
      workboxOptions: {}, // only for GenerateSW

      // for the custom service worker ONLY (/src-pwa/custom-service-worker.[js|ts])
      // if using workbox in InjectManifest mode
      chainWebpackCustomSW (/* chain */) {
        //
      },

      manifest: {
        name: `myTodo`,
        short_name: `myTodo`,
        description: `A Quasar Framework app`,
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
        theme_color: '#027be3',
        icons: [
          {
            src: 'icons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: 'icons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icons/icon-256x256.png',
            sizes: '256x256',
            type: 'image/png'
          },
          {
            src: 'icons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: 'icons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
    cordova: {
      // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
    capacitor: {
      hideSplashscreen: false
    },

    bin: {
      linuxAndroidStudio: "/home/moha/android-studio-ide/android-studio/bin/studio.sh"
      
    },
    
    sourceFiles: {
      electronMain: 'src-electron/electron-main',
      electronPreload: 'src-electron/electron-preload'
    },

    // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
    // electron configuration
electron: {
  bundler: 'builder', // or 'builder'

  // electron-packager options
  // https://electron.github.io/electron-packager/master/
  packager: {
    //...
  },

  // electron-builder options
  // https://www.electron.build/configuration/configuration
  builder: {
    appId: 'my-todo',
    linux: {
      target: [
          'AppImage',
          'deb'
      ]
    }
  },
  // Specify additional parameters when yarn/npm installing
  // the UnPackaged folder, right before bundling with either
  // electron packager or electron builder;
  // Example: [ '--ignore-optional', '--some-other-param' ]
  unPackagedInstallParams: [],

  // optional; add/remove/change properties
  // of production generated package.json
  extendPackageJson (pkg) {
    // directly change props of pkg;
    // no need to return anything
  },

  // optional; webpack config Object for
  // the Main Process ONLY (/src-electron/main-process/electron-main.js)
  extendWebpackMain (cfg) {
    // directly change props of cfg;
    // no need to return anything
  },

  // optional; EQUIVALENT to extendWebpackMain() but uses webpack-chain;
  // for the Main Process ONLY (/src-electron/main-process/electron-main.js)
  chainWebpackMain (chain) {
    // chain is a webpack-chain instance
    // of the Webpack configuration

    // example:
    // chain.plugin('eslint-webpack-plugin')
    //   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
  },

  // optional; webpack config Object for
  // the Preload Process ONLY (/src-electron/main-process/electron-preload.js)
  extendWebpackPreload (cfg) {
    // directly change props of cfg;
    // no need to return anything
  },

  // optional; EQUIVALENT to extendWebpackPreload() but uses webpack-chain;
  // for the Preload Process ONLY (/src-electron/main-process/electron-preload.js)
  chainWebpackPreload (chain) {
    // chain is a webpack-chain instance
    // of the Webpack configuration

    // example:
    // chain.plugin('eslint-webpack-plugin')
    //   .use(ESLintPlugin, [{ extensions: [ 'js' ] }])
  }
}
  }
});
