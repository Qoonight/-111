import * as THREE from 'three';

export enum AppState {
  CHAOS = 'CHAOS',
  FORMED = 'FORMED',
}

export const PALETTE = {
  EMERALD: new THREE.Color('#004225'),
  EMERALD_LIGHT: new THREE.Color('#0F5E36'),
  GOLD: new THREE.Color('#FFD700'),
  GOLD_DARK: new THREE.Color('#C5A000'),
  RUBY: new THREE.Color('#8B0000'),
  WHITE: new THREE.Color('#FFFFFF'),
};

export interface OrnamentData {
  id: number;
  chaosPos: THREE.Vector3;
  targetPos: THREE.Vector3;
  color: THREE.Color;
  speed: number; // For weight simulation
  scale: number;
  rotationSpeed: number;
}
