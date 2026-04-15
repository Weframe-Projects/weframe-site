"use client";

import { useRef, useMemo, useEffect } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

const PARTICLE_COUNT = 200;
const CONNECTION_DISTANCE = 2.5;
const MOUSE_INFLUENCE = 3;

function Particles() {
  const meshRef = useRef<THREE.InstancedMesh>(null);
  const linesRef = useRef<THREE.LineSegments>(null);
  const mouse = useRef(new THREE.Vector2(0, 0));
  const { viewport } = useThree();

  const particles = useMemo(() => {
    const positions: THREE.Vector3[] = [];
    const velocities: THREE.Vector3[] = [];
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      positions.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 12,
          (Math.random() - 0.5) * 8,
          (Math.random() - 0.5) * 4
        )
      );
      velocities.push(
        new THREE.Vector3(
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.005,
          (Math.random() - 0.5) * 0.002
        )
      );
    }
    return { positions, velocities };
  }, []);

  const dummy = useMemo(() => new THREE.Object3D(), []);
  const lineGeometry = useMemo(
    () => new THREE.BufferGeometry(),
    []
  );

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useFrame(() => {
    if (!meshRef.current) return;

    const mouseWorld = new THREE.Vector3(
      mouse.current.x * viewport.width * 0.5,
      mouse.current.y * viewport.height * 0.5,
      0
    );

    // Update particle positions
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const pos = particles.positions[i];
      const vel = particles.velocities[i];

      // Mouse attraction
      const dx = mouseWorld.x - pos.x;
      const dy = mouseWorld.y - pos.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < MOUSE_INFLUENCE && dist > 0.1) {
        const force = 0.0003 * (MOUSE_INFLUENCE - dist);
        vel.x += dx * force;
        vel.y += dy * force;
      }

      // Damping
      vel.multiplyScalar(0.99);

      pos.add(vel);

      // Bounds wrap
      if (pos.x > 7) pos.x = -7;
      if (pos.x < -7) pos.x = 7;
      if (pos.y > 5) pos.y = -5;
      if (pos.y < -5) pos.y = 5;

      dummy.position.copy(pos);
      dummy.updateMatrix();
      meshRef.current.setMatrixAt(i, dummy.matrix);
    }
    meshRef.current.instanceMatrix.needsUpdate = true;

    // Update connection lines
    if (linesRef.current) {
      const linePositions: number[] = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        for (let j = i + 1; j < PARTICLE_COUNT; j++) {
          const d = particles.positions[i].distanceTo(particles.positions[j]);
          if (d < CONNECTION_DISTANCE) {
            linePositions.push(
              particles.positions[i].x,
              particles.positions[i].y,
              particles.positions[i].z,
              particles.positions[j].x,
              particles.positions[j].y,
              particles.positions[j].z
            );
          }
        }
      }
      lineGeometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(linePositions, 3)
      );
    }
  });

  return (
    <>
      <instancedMesh ref={meshRef} args={[undefined, undefined, PARTICLE_COUNT]}>
        <sphereGeometry args={[0.03, 8, 8]} />
        <meshBasicMaterial color="#A7D7C5" transparent opacity={0.3} />
      </instancedMesh>
      <lineSegments ref={linesRef} geometry={lineGeometry}>
        <lineBasicMaterial color="#A7D7C5" transparent opacity={0.08} />
      </lineSegments>
    </>
  );
}

export default function ParticleNetwork({
  particleCount,
}: {
  particleCount?: number;
}) {
  // particleCount prop reserved for MiniParticles variant
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        style={{ background: "transparent" }}
        gl={{ antialias: false, alpha: true }}
      >
        <Particles />
      </Canvas>
    </div>
  );
}
