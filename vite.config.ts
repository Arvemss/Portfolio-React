import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Permite acceder desde la red local
    port: 5173,
    hmr: {
      overlay: true // Muestra errores en pantalla (puedes poner false si molesta)
    }
  }
})
