import type { ImageData, SceneData } from '@/models/Parallax.ts';
import { animate } from 'animejs';

export const parallaxImageData = [
  {
    src: '/assets/bg/sky.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.2,
  },
  {
    src: '/assets/bg/star.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.2,
  },
  {
    src: '/assets/bg/low-sky.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.75,
  },
  {
    src: '/assets/bg/moon.png',
    scrollSpeedX: 0.25,
    scrollSpeedY: 0.25,
  },
  {
    src: '/assets/bg/city.png',
    scrollSpeedX: 0.2,
    scrollSpeedY: 0.7,
  },
  {
    src: '/assets/bg/scene.png',
    scrollSpeedX: 1,
    scrollSpeedY: 1,
  },
] as ImageData[];

export const parallaxSceneData = [
  {
    start: 0,
    end: 1500,
    startCamera: {
      x: 0,
      y: -2000,
      zoom: 1,
    },
    endCamera: {
      x: 0,
      y: 0,
      zoom: 1.25,
    },
  },
  {
    start: 1500,
    end: 2500,
    startCamera: {
      x: 0,
      y: 0,
      zoom: 1.25,
    },
    endCamera: {
      x: 0,
      y: 0,
      zoom: 1,
    },
  },
  {
    start: 2500,
    end: 3000,
    startCamera: {
      x: 0,
      y: 0,
      zoom: 1,
    },
    endCamera: {
      x: 0,
      y: 0,
      zoom: 1,
    },
  },
  {
    start: 3000,
    end: 4000,
    startCamera: {
      x: 0,
      y: 0,
      zoom: 1,
    },
    endCamera: {
      x: 200,
      y: 280,
      zoom: 2,
    },
  },
  {
    start: 4000,
    end: 5500,
    startCamera: {
      x: 200,
      y: 280,
      zoom: 2,
    },
    endCamera: {
      x: 200,
      y: 280,
      zoom: 2,
    },
  },
] as SceneData[];
