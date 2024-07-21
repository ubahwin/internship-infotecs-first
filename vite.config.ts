import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {PreRenderedAsset} from 'rollup'

export default defineConfig({
  build: {
    target: 'esnext',
    minify: 'terser',
    rollupOptions: {
      output: {
        assetFileNames: (chunkInfo: PreRenderedAsset) => {
          return chunkInfo.name === 'favicon.png' ? chunkInfo.name : 'assets/[name]-[hash].[ext]'
        }
      }
    }
  },
  base: '',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@pages': path.resolve(__dirname, 'src/pages')
    }
  },
  plugins: [react()]
})
