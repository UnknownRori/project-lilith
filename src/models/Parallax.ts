import type { Camera2D } from "@/composable/useParallaxCanvas";

export interface ImageData {
  src: string,
  scrollSpeedX: number,
  scrollSpeedY: number,
  image: HTMLImageElement | null,
}

export interface SceneData {
  start: number,
  end: number,
  startCamera: Camera2D,
  endCamera: Camera2D,
  active: boolean,
  onEnter: () => void | null,
  onUpdate: (progress: number) => void | null,
  onLeave: () => void | null,
}

export interface Camera2D {
  x: number,
  y: number,
  zoom: number,
}
