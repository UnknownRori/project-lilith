import { watch, onMounted, onUnmounted, type Ref } from 'vue';
import type { ImageData, SceneData } from '@/models/Parallax.ts';
import { useScrollStore } from "@/stores/ScrollStore.ts";
import { Canvas } from '@/libs/canvas';
import useRoute from './useRoute';

// INFO : Utilty function used for the useParallaxCanvas
// ------------------------------------------------------------------------

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

// INFO : useParallaxCanvas definition
// ------------------------------------------------------------------------

interface ParallaxParams {
  canvas: Ref<HTMLCanvasElement>,
  img: ImageData[],
  scene: SceneData[],
}

export function useParallaxCanvas({ canvas, img, scene }: ParallaxParams) {

  const scroll = useScrollStore();
  let canvasHandler: Canvas | null = null;

  function loop(_: number) {
    if (!canvasHandler) return;

    canvasHandler.rawDraw(img[0], 0, 0, 1);
    for (const image of img) {
      canvasHandler.draw(image);
    }
    canvasHandler.drawVignette();

    requestAnimationFrame(loop);
  }

  onMounted(() => {
    if (canvasHandler != null) return;
    (async () => {
      const camera = {
        x: 0,
        y: -2000,
        zoom: 1,
      };

      const routeIndex = useRoute().getActiveRoute().keyframe;
      if (scene[routeIndex]) {
        scroll.scrollTo(scene[routeIndex].start);
      }
      canvasHandler = new Canvas(canvas.value, camera);
      canvasHandler.init();
      await loadImages(img);

      loop(0);
    })();
  })

  onUnmounted(() => {
    if (!canvasHandler) return;

    canvasHandler.dispose();
  })

  scroll.$subscribe(() => {
    if (!canvasHandler) return;
    if (!canvasHandler.updateCameraBasedOnScene(scene, scroll.position + 1)) {
      scroll.revert();
    }
  })

}
