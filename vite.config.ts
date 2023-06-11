import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import path from 'node:path'
import react from '@vitejs/plugin-react'
import eslint from 'vite-plugin-eslint'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint(), dts({
    insertTypesEntry: true,
  })],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/index.tsx'),
      name: 'neko-react-cva',
      fileName: (format) => `neko-react-cva.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    }
  }
})
