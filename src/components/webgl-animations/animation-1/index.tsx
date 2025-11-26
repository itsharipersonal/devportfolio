"use client";

import { Suspense } from "react";
import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

export const Animation1 = ({ hovering }: { hovering?: boolean }) => {
  // Fixed default values (matching Leva defaults from resume_builder)
  const speed = 1.0;
  const noiseScale = 0.6;
  const noiseIntensity = 0.52;
  const timeScale = 1;
  const focus = 3.8;
  const aperture = 1.79;
  const pointSize = 10.0;
  const opacity = 0.8;
  const planeScale = 10.0;
  const size = 512;
  const vignetteDarkness = 1.5;
  const vignetteOffset = 0.4;
  const useManualTime = false;
  const manualTime = 0;

  return (
    <div id="webgl" className="absolute inset-0 w-full h-full" style={{ width: '100%', height: '100%' }}>
      <Suspense fallback={null}>
        <Canvas
          camera={{
            position: [
              1.2629783123314589, 2.664606471394044, -1.8178993743288914,
            ],
            fov: 50,
            near: 0.01,
            far: 300,
          }}
          style={{ width: '100%', height: '100%' }}
          gl={{ antialias: true, alpha: false }}
          dpr={[1, 2]}
        >
          <color attach="background" args={["#000000"]} />
          <Particles
            speed={speed}
            aperture={aperture}
            focus={focus}
            size={size}
            noiseScale={noiseScale}
            noiseIntensity={noiseIntensity}
            timeScale={timeScale}
            pointSize={pointSize}
            opacity={opacity}
            planeScale={planeScale}
            useManualTime={useManualTime}
            manualTime={manualTime}
            introspect={hovering || false}
          />
          <Effects multisamping={0} disableGamma>
            <shaderPass
              args={[VignetteShader]}
              uniforms-darkness-value={vignetteDarkness}
              uniforms-offset-value={vignetteOffset}
            />
          </Effects>
        </Canvas>
      </Suspense>
    </div>
  );
};

