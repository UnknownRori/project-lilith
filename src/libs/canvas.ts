import { animate } from 'animejs';
import type { Camera2D, ImageData, SceneData } from "@/models/Parallax";
import { lerp } from '@/utils';

export class Canvas {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;

  private width: number = 0;
  private height: number = 0;
  private camera: Camera2D;
  private resizeCanvas: () => void;

  constructor(canvas: HTMLCanvasElement, camera: Camera2D) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d") as CanvasRenderingContext2D;
    this.camera = camera;
    this._resizeCanvas();
    this.resizeCanvas = () => this._resizeCanvas();
  }

  public init() {
    window.addEventListener('resize', this.resizeCanvas);
  }

  public dispose() {
    window.removeEventListener('resize', this.resizeCanvas);
  }

  public animateCamera(camera: Camera2D) {
    animate(this.camera, {
      ...this.camera,
      ...camera,
    });
  }

  public updateCameraBasedOnScene(scenes: SceneData[], scroll: number): boolean {
    for (const scene of scenes) {
      if ((scroll < scene.start || scroll > scene.end)) {
        if (scene.active) {
          scene.active = false;
        }
        continue;
      }

      scene.active = true;
      const t = (scroll - scene.start) / (scene.end - scene.start);
      this.animateCamera({
        x: lerp(scene.startCamera.x, scene.endCamera.x, t),
        y: lerp(scene.startCamera.y, scene.endCamera.y, t),
        zoom: lerp(scene.startCamera.zoom, scene.endCamera.zoom, t),
      })
      return true;
    }
    return false
  }

  public rawDraw(image: ImageData, x: number, y: number, zoom: number) {
    if (!image.image) return;

    const offsetX = x * image.scrollSpeedX;
    const offsetY = y * image.scrollSpeedY;

    const imageWidth = image.image.width;
    const imageHeight = image.image.height;

    const canvasRatio = this.width / this.height;
    const imageRatio = imageWidth / imageHeight;
    let baseW = 0, baseH = 0;
    if (canvasRatio > imageRatio) {
      baseW = imageWidth;
      baseH = imageWidth / canvasRatio;
    } else {
      baseH = imageHeight;
      baseW = imageHeight * canvasRatio;
    }

    // Apply zoom
    const sourceW = baseW / zoom;
    const sourceH = baseH / zoom;

    // Centering logic
    const centerX = offsetX + (imageWidth - sourceW) / 2;
    const centerY = offsetY + (imageHeight - sourceH) / 2;

    this.ctx.drawImage(
      image.image,
      centerX, centerY,
      sourceW, sourceH,
      0, 0, this.width, this.height,
    )
  }

  public draw(image: ImageData) {
    this.rawDraw(image, this.camera.x, this.camera.y, this.camera.zoom);
  }

  public drawVignette() {
    const gradient = this.ctx.createRadialGradient(
      this.width / 2, this.height / 2, this.width / 4,
      this.width / 2, this.height / 2, this.width / 1.2
    );

    gradient.addColorStop(0, 'rgba(0, 0, 0, 0)');
    gradient.addColorStop(1, 'rgba(0, 0, 0, 1)');

    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
  }

  private _resizeCanvas() {
    this.width = window.innerWidth
    this.height = window.innerHeight

    this.canvas.width = this.width
    this.canvas.height = this.height
  }
}
