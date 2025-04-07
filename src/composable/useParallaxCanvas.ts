import { watch, onMounted, onUnmounted, type Ref } from 'vue';
import type { ImageData, SceneData } from '@/models/Parallax.ts';
import { useScrollStore } from "@/stores/ScrollStore.ts";

interface ParallaxParams {
  canvas: Ref<HTMLCanvasElement>,
  img: ImageData[],
  scene: SceneData[],
}

function resizeCanvas(canvas: HTMLCanvasElement): [number, number] {
  const width = window.innerWidth
  const height = window.innerHeight

  canvas.width = width
  canvas.height = height

  return [width, height];
}
function loadImages(layers: ImageData[]): Promise<void[]> {
  return Promise.all(layers.map(layer => {
    return new Promise<void>((resolve) => {
      const img = new Image();
      img.src = layer.src;
      img.onload = () => {
        layer.image = img
        resolve()
      }
    })
  }))
}

export function useParallaxCanvas({ canvas, img, scene }: ParallaxParams) {
  const fps = 60;
  let lastTime = 0;

  const scroll = useScrollStore();

  let width = 0, height = 0;
  let ctx: CanvasRenderingContext2D | null;
  const camera = {
    x: 0,
    y: 0,
    zoom: 1,
  };

  const resizeCanvasFunction = () => resizeCanvas(canvas.value);

  function loop(timestamp: number) {
    if (!ctx) return;

    const deltaFrame = timestamp - lastTime;
    const delta = deltaFrame / 1000;

    if (deltaFrame >= 1000 / fps) {
      lastTime = timestamp;

      for (const image of img) {
        if (!image.image) continue;

        const offsetX = camera.x * image.scrollSpeedX;
        const offsetY = camera.y * image.scrollSpeedY;

        const sourceW = width / camera.zoom
        const sourceH = height / camera.zoom

        ctx.drawImage(
          image.image,
          offsetX, offsetY, sourceW, sourceH,
          0, 0, width, height,
        )
      }
    }

    requestAnimationFrame(loop);
  }

  onMounted(() => {
    (async () => {
      ctx = canvas.value.getContext("2d");
      [width, height] = resizeCanvas(canvas.value)
      await loadImages(img);

      window.addEventListener('resize', resizeCanvasFunction);
      loop(0);
    })();
  })

  onUnmounted(() => {
    window.removeEventListener('resize', resizeCanvasFunction);
  })

  watch(scroll, () => {
    // Animate
  })

}
