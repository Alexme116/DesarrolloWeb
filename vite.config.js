/* eslint-disable no-undef */
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        calculadora: resolve(__dirname, 'src/calculadora/index.html'),
        pokedex: resolve(__dirname, 'src/pokedex/index.html'),
      }
    }
  }
})
