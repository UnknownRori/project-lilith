import { watch, onMounted, onUnmounted, type Ref } from 'vue';
import { animate } from 'animejs';
import type { ImageData, SceneData } from '@/models/Parallax.ts';
import { useScrollStore } from "@/stores/ScrollStore.ts";

// INFO : Internal types
// ------------------------------------------------------------------------
//
interface Camera2D {
  x: number,
  y: number,
  zoom: number,
}

// INFO : Utilty function used for the useParallaxCanvas
// ------------------------------------------------------------------------

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

function draw(ctx: CanvasRenderingContext2D, img: ImageData[], camera: Camera2D, width: number, height: number) {
  for (const image of img) {
    if (!image.image) continue;

    const offsetX = camera.x * image.scrollSpeedX;
    const offsetY = camera.y * image.scrollSpeedY;

    const imageWidth = image.image.width;
    const imageHeight = image.image.height;

    const canvasRatio = width / height;
    const sourceH = imageHeight;
    const sourceW = imageHeight * canvasRatio;

    ctx.drawImage(
      image.image,
      offsetX + (imageWidth - sourceW) / 2.,
      offsetY + (imageHeight - sourceH) / 2.,
      sourceW, sourceH,
      0, 0, width, height,
    )
  }
}

// INFO : useParallaxCanvas definition
// ------------------------------------------------------------------------

interface ParallaxParams {
  canvas: Ref<HTMLCanvasElement>,
  img: ImageData[],
  scene: SceneData[],
}

export function useParallaxCanvas({ canvas, img, scene }: ParallaxParams) {

  const scroll = useScrollStore();

  let width = 0, height = 0;
  let ctx: CanvasRenderingContext2D | null;
  const camera: Camera2D = {
    x: 0,
    y: 0,
    zoom: 1,
  };

  const resizeCanvasFunction = () => {
    [width, height] = resizeCanvas(canvas.value)
  };

  function loop(_: number) {
    if (!ctx) return;

    draw(ctx, img, camera, width, height);

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
    animate(camera, {
      y: scroll.position,
      frameRate: 60,
    })
  })

}
