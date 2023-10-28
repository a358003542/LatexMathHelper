const path = require('path')
module.exports = {
  packagerConfig: {
    asar: true,
    icon: 'resources/icon' 
  },
  rebuildConfig: {},
  makers: [
    {
      name: '@electron-forge/maker-squirrel',
      config: {},
    },
    {
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
  plugins: [
    {
      name: '@electron-forge/plugin-auto-unpack-natives',
      config: {},
    },
    {
      name: '@electron-forge/plugin-webpack',
      config: {
        devContentSecurityPolicy: 'default-src \'self\' \'unsafe-inline\' https://cdn.jsdelivr.net/; script-src \'self\' \'unsafe-eval\' \'unsafe-inline\' https://cdn.jsdelivr.net/',
        mainConfig: './webpack.main.config.js',
        renderer: {
          config: './webpack.renderer.config.js',
          entryPoints: [
            {
              html: './app/index.html',
              js: './app/renderer.js',
              name: 'main_window',
              preload: {
                js: './app/preload.js',
              },
            },
          ],
        },
      },
    },
  ],
};
