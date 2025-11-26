"use client";

import { Animation1 } from "./animation-1";

export const GlobalAnimationBackground = () => {
  return (
    <div 
      className="fixed inset-0 z-0 pointer-events-none" 
      style={{ 
        width: '100vw', 
        height: '100vh',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Animation1 />
    </div>
  );
};

