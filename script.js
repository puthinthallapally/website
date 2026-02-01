function animate() {
  requestAnimationFrame(animate);
  points.rotation.x += 0.0003;
  points.rotation.y += 0.0006;
  renderer.render(scene, camera);
}
const material = new THREE.PointsMaterial({
  color: 0xffffff,
  size: 0.6
});

