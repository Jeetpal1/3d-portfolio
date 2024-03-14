import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

import birdScene from "../assets/3d/flying_dragon.glb";

export function Bird() {
  const birdRef = useRef(); // Reference to the 3D dragon model
  const initialYRotation = Math.PI; // Initial rotation to make the dragon face the right way

  // Load the dragon model and its animations
  const { scene, animations } = useGLTF(birdScene);
  // Access the dragon's animations
  const { actions } = useAnimations(animations, birdRef);

  useEffect(() => {
    actions["Take 001"].play(); // Start the animation named "Take 001"
    birdRef.current.rotation.y = initialYRotation; // Set the dragon's initial rotation
  }, []);

  useFrame(({ clock, camera }) => {
    // Create a flying effect by adjusting the dragon's Y position over time
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.2 + 2;

    // If the dragon moves too far to the right, make it turn around
    if (birdRef.current.position.x > camera.position.x + 10) {
      birdRef.current.rotation.y = initialYRotation + Math.PI;
      // If the dragon moves too far to the left, make it turn around
    } else if (birdRef.current.position.x < camera.position.x - 10) {
      birdRef.current.rotation.y = initialYRotation; // Reset rotation for forward movement
    }

    // Move the dragon forward or backward based on its rotation
    if (birdRef.current.rotation.y === initialYRotation) {
      birdRef.current.position.x += 0.01; // Move forward
      birdRef.current.position.z -= 0.01;
    } else {
      birdRef.current.position.x -= 0.01; // Move backward
      birdRef.current.position.z += 0.01;
    }
  });

  return (
    <mesh ref={birdRef} position={[-5, 2, 1]} scale={[1, 1, 1]}>
      {/* Embed the 3D dragon model into the scene */}
      <primitive object={scene} />
    </mesh>
  );
}
