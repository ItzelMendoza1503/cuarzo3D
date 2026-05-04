<script setup>
import { onMounted } from 'vue'
import * as THREE from 'three'
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

onMounted(() => {
  const scene = new THREE.Scene()
  scene.background = new THREE.Color(0x050505)

  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  )

  const renderer = new THREE.WebGLRenderer({ antialias: true })
  renderer.setSize(window.innerWidth, window.innerHeight)
  document.body.appendChild(renderer.domElement)

  // 🖱️ CONTROLES
  const controls = new OrbitControls(camera, renderer.domElement)
  controls.enableDamping = true

  // 🌈 LUCES PRO
  const light1 = new THREE.DirectionalLight(0xffffff, 1.5)
  light1.position.set(100, 100, 100)
  scene.add(light1)

  const light2 = new THREE.DirectionalLight(0xff99cc, 1) // rosa suave
  light2.position.set(-100, 50, -100)
  scene.add(light2)

  const light3 = new THREE.PointLight(0xff66cc, 2, 300) // rosa fuerte
  light3.position.set(0, 50, 50)
  scene.add(light3)

  scene.add(new THREE.AmbientLight(0xffffff, 0.4))

  let mesh

  // 💎 CARGAR STL
  const loader = new STLLoader()

  loader.load('/cristal.stl', (geometry) => {
    // 🔥 ARREGLAR GEOMETRÍA
    geometry.computeVertexNormals()
    geometry.center()

    // 🎀 MATERIAL ROSA PASTEL
    const material = new THREE.MeshStandardMaterial({
      color: 0xffd6e7, // rosa pastel suave 💕
      emissive: 0x220011,
      metalness: 0.6,
      roughness: 0.3
    })

    mesh = new THREE.Mesh(geometry, material)
    mesh.rotation.x = -Math.PI / 2
    scene.add(mesh)
  })

  // 📸 CÁMARA
  camera.position.set(0, 50, 120)

  // 🔥 ANIMACIÓN
  function animate() {
    requestAnimationFrame(animate)

    controls.update()
    renderer.render(scene, camera)
  }

  animate()
})
</script>

<template>
  <div></div>
</template>