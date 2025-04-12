import { onMounted, onUnmounted } from "vue";

export function useVirtualScroll(handler: (deltaY: number) => void) {
  let lastTouchY = 0;
  let isTouching = false;

  const onWheel = (event: WheelEvent) => {
    event.preventDefault()
    handler(event.deltaY)
  }

  onMounted(() => {
    window.addEventListener('wheel', onWheel, { passive: false })
    window.addEventListener('touchstart', (e) => {
      if (e.touches.length === 1) {
        lastTouchY = e.touches[0].clientY;
        isTouching = true;
      }
    });
    window.addEventListener('touchmove', (e) => {
      if (isTouching && e.touches.length === 1) {
        const current = e.touches[0].clientY;
        const delta = lastTouchY - current;
        lastTouchY = current;
        handler(delta * 2);
      }
    });
    window.addEventListener('touchend', (e) => {
      isTouching = false;
    });
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', onWheel)
  })
}
