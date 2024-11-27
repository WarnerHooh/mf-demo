import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginModuleFederation } from '@module-federation/rsbuild-plugin'

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginModuleFederation({
      name: 'remote_app',
      exposes: {
        './button': './src/button/index.tsx',
      },
      shared: ['react', 'react-dom'],
      // experiments: {
      //   federationRuntime: 'hoisted'
      // },
    })
  ],
  server: {
    port: 3001,
  },
  // tools: {
  //   rspack: {
  //     optimization: {
  //       runtimeChunk: 'single'
  //     }
  //   }
  // }
});
