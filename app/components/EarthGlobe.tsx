"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, useTexture } from "@react-three/drei";
import { useRef } from "react";
import * as THREE from "three";

function Earth() {
  const earthRef = useRef<THREE.Group>(null);

  const earthTexture = useTexture("/textures/earth.jpg");

  useFrame((_, delta) => {
    if (earthRef.current) {
      earthRef.current.rotation.y += delta * 0.12;
    }
  });

  return (
    <group ref={earthRef}>

      {/* EARTH */}
      <mesh>
        <sphereGeometry args={[1.7, 128, 128]} />

        <meshStandardMaterial
          map={earthTexture}
          roughness={0.9}
          metalness={0}
          color="#ffffff"
        />
      </mesh>

      {/* SUBTLE NIGHT-SIDE CITY LIGHTS */}
      <mesh scale={1.006}>
        <sphereGeometry args={[1.7, 128, 128]} />

        <shaderMaterial
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          uniforms={{
            time: { value: 0 },
          }}
          vertexShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;

            void main() {
              vNormal = normalize(normalMatrix * normal);
              vPosition = (modelViewMatrix * vec4(position, 1.0)).xyz;

              gl_Position =
                projectionMatrix *
                modelViewMatrix *
                vec4(position, 1.0);
            }
          `}
          fragmentShader={`
            varying vec3 vNormal;
            varying vec3 vPosition;

            float hash(vec2 p) {
              return fract(
                sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123
              );
            }

            float noise(vec2 p) {
              vec2 i = floor(p);
              vec2 f = fract(p);

              f = f * f * (3.0 - 2.0 * f);

              float a = hash(i);
              float b = hash(i + vec2(1.0, 0.0));
              float c = hash(i + vec2(0.0, 1.0));
              float d = hash(i + vec2(1.0, 1.0));

              return mix(
                mix(a, b, f.x),
                mix(c, d, f.x),
                f.y
              );
            }

            void main() {

              /*
                Direction of the sun.
                This creates a real day/night boundary.
              */
              vec3 sunDirection = normalize(
                vec3(-0.8, 0.35, 1.0)
              );

              float sunlight = dot(
                normalize(vNormal),
                sunDirection
              );

              /*
                Only allow lights on the dark side.
              */
              float night = smoothstep(
                0.08,
                -0.30,
                sunlight
              );

              /*
                Convert position into coordinates
                used for procedural city lights.
              */
              vec3 p = normalize(vPosition);

              float latitude = asin(p.y);
              float longitude = atan(p.z, p.x);

              vec2 cityUV = vec2(
                longitude * 3.0,
                latitude * 5.0
              );

              /*
                Multiple layers of noise create
                small clusters instead of random
                giant glowing dots.
              */
              float n1 = noise(cityUV * 18.0);
              float n2 = noise(cityUV * 42.0);
              float n3 = noise(cityUV * 90.0);

              float cities =
                smoothstep(0.72, 0.90, n1) *
                smoothstep(0.50, 0.82, n2) *
                smoothstep(0.35, 0.70, n3);

              /*
                Warm subtle city-light color.
              */
              vec3 lightColor = vec3(
                1.0,
                0.55,
                0.16
              );

              float intensity =
                cities *
                night *
                0.65;

              gl_FragColor = vec4(
                lightColor,
                intensity
              );
            }
          `}
        />
      </mesh>

      {/* ATMOSPHERE */}
      <mesh scale={1.035}>
        <sphereGeometry args={[1.7, 128, 128]} />

        <meshBasicMaterial
          color="#3b82f6"
          transparent
          opacity={0.055}
          side={THREE.BackSide}
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </mesh>

    </group>
  );
}

function GlobeScene() {
  return (
    <>
      {/* SOFT GLOBAL LIGHT */}
      <ambientLight intensity={0.12} />

      {/* SUN */}
      <directionalLight
        position={[-5, 3, 5]}
        intensity={2.8}
      />

      <Earth />

      {/* SPACE */}
      <Stars
        radius={25}
        depth={15}
        count={1000}
        factor={1.4}
        saturation={0}
        fade
        speed={0.15}
      />
    </>
  );
}

export default function EarthGlobe() {
  return (
    <div
      className="
        h-[340px]
        w-[340px]
        sm:h-[440px]
        sm:w-[440px]
        md:h-[500px]
        md:w-[500px]
        lg:h-[560px]
        lg:w-[560px]
      "
    >
      <Canvas
        camera={{
          position: [0, 0, 5],
          fov: 45,
        }}
        dpr={[1, 2]}
      >
        <GlobeScene />
      </Canvas>
    </div>
  );
}