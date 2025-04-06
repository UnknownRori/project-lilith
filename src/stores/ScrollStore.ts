import { defineStore } from 'pinia'

export const useScrollStore = defineStore('scroll', {
  state: () => ({
    position: 0
  }),
  actions: {
    scrollBy(delta: number) {
      this.position += delta
    }
  }
})
