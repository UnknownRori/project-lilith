import type { ImageData, SceneData } from '@/models/Parallax.ts';
import { animate } from 'animejs';

export const parallaxImageData = [
  {
    src: '/assets/bg/sky.png',
    scrollSpeedX: 0,
    scrollSpeedY: 0.2,
  },
  {
    src: '/assets/bg/star.png',
    scrollSpeedX: 0,
    scrollSpeedY: 0.2,
  },
  {
    src: '/assets/bg/low-sky.png',
    scrollSpeedX: 0,
    scrollSpeedY: 0.75,
  },
  {
    src: '/assets/bg/moon.png',
    scrollSpeedX: 0,
    scrollSpeedY: 0.25,
  },
  {
    src: '/assets/bg/city.png',
    scrollSpeedX: 0,
    scrollSpeedY: 0.7,
  },
  {
    src: '/assets/bg/scene.png',
    scrollSpeedX: 0,
    scrollSpeedY: 1,
  },
] as ImageData[];

export const parallaxSceneData = [
  {
    start: 0,
    end: 100,
  }
] as SceneData[];
