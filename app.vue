<template>
  <div class="app-container">
    <header>
      <h1>Proyecto Cuarzo3D</h1>
      <p>Componente cargado con Lazy Loading y Code Splitting</p>
    </header>

    <main>
      <!-- Nuxt carga este componente solo cuando es necesario -->
      <LazyAestheticViewer />
    </main>

    <footer>
      <p>Entregable: Lunes 4 de mayo de 2026</p>
    </footer>
  </div>
</template>

<style>
body { margin: 0; font-family: sans-serif; background-color: #fafafa; }
.app-container { max-width: 800px; margin: 0 auto; padding: 40px; text-align: center; }
h1 { color: #ff69b4; font-size: 2.5rem; }
p { color: #666; }
footer { margin-top: 50px; border-top: 1px solid #eee; padding-top: 20px; color: #bbb; }
</style>
