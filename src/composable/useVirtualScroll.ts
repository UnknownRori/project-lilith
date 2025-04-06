import { onMounted, onUnmounted } from "vue";

export function useVirtualScroll(handler: (deltaY: number) => void) {
  const onWheel = (event: WheelEvent) => {
    event.preventDefault()
    handler(event.deltaY)
  }

  onMounted(() => {
    window.addEventListener('wheel', onWheel, { passive: false })
  })

  onUnmounted(() => {
    window.removeEventListener('wheel', onWheel)
  })
}
