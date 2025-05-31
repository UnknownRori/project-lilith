export type ImageData = {
  src: string,
  scrollSpeedX: number,
  scrollSpeedY: number,
  image: HTMLImageElement | null,
} | {
  src: string[],
  scrollSpeedX: number,
  scrollSpeedY: number,
  fps: number,
  count: number,
  active: number,
  image: HTMLImageElement[] | null,
}

export interface SceneData {
  position: Camera2D,
  active: boolean,
}

export interface Camera2D {
  x: number,
  y: number,
  zoom: number,
}
