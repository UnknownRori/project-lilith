export interface ImageData {
  src: string,
  scrollSpeedX: number,
  scrollSpeedY: number,
  image: HTMLImageElement | null,
}

export interface SceneData {
  start: number,
  end: number,
  onScroll: (progress: number) => void,
  onEnter: () => void,
  onLeave: () => void,
}
