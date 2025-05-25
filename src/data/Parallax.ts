import type { ImageData, SceneData } from '@/models/Parallax.ts';

export const parallaxImageData = [
  {
    src: './assets/bg/sky.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.2,
  },
  {
    src: './assets/bg/star.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.2,
  },
  {
    src: './assets/bg/low-sky.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.75,
  },
  {
    src: './assets/bg/moon.png',
    scrollSpeedX: 0.25,
    scrollSpeedY: 0.25,
  },
  {
    src: './assets/bg/city.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.7,
  },
  {
    src: './assets/bg/scene.png',
    scrollSpeedX: 1,
    scrollSpeedY: 1,
  },
] as ImageData[];

export const parallaxSceneData = [
  // Sky [0]
  {
    position: {
      x: 0,
      y: -2000,
      zoom: 1,
    },
  },
  // Base [1]
  {
    position: {
      x: 0,
      y: 0,
      zoom: 1,
    },
  },
  // Lilith [2]
  {
    position: {
      x: 200,
      y: 280,
      zoom: 2,
    },
  },
] as SceneData[];
