import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    position: 0,
    oldPosition: 0,
  }),
  actions: {
    scrollTo(newPos: number) {
      this.oldPosition = this.position;
      this.position = newPos
    },
    scrollBy(delta: number) {
      if (this.position + delta >= 0) {
        this.oldPosition = this.position;
        this.position += delta
      }
    },
    revert() {
      this.position = this.oldPosition;
    }
  }
})
