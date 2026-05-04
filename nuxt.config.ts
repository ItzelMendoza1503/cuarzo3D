export default defineNuxtConfig({
  build: {
    transpile: ['three']
  },
  // Esto asegura que el puerto 3000 sea visible en Codespaces
  devServer: {
    host: '0.0.0.0',
    port: 3000
  }
})