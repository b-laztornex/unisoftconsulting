// ThreeBackground.tsx
import React, { useEffect, useRef } from "react";
import * as THREE from "three";

const ThreeBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Create scene, camera and renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.z = 3;
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);

    // Append renderer DOM element
    if (mountRef.current) {
      mountRef.current.appendChild(renderer.domElement);
    }
    const mountNode = mountRef.current;

    // Compute world height at the distance of the sphere (z=0)
    const fovInRadians = THREE.MathUtils.degToRad(camera.fov);
    const worldHeight = 2 * camera.position.z * Math.tan(fovInRadians / 2);

    // Set sphere's diameter to 75% of the view screen's world height and compute radius
    const sphereDiameter = 0.75 * worldHeight;
    const sphereRadius = sphereDiameter / 2;

    // Create a wireframe sphere (the globe) with the computed radius
    const sphereGeometry = new THREE.SphereGeometry(sphereRadius, 32, 32);
    const sphereMaterial = new THREE.MeshBasicMaterial({
      color: 0x0077be,
      wireframe: true,
    });
    const sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    scene.add(sphere);

    // Animation loop (infinite loop)
    const animate = () => {
      requestAnimationFrame(animate);
      // Rotate the globe slowly
      sphere.rotation.y += 0.005;
      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      if (mountNode) {
        mountNode.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0" />;
};

export default ThreeBackground;
