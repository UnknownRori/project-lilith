import { animate } from 'animejs';
import { onMounted } from 'vue';

export default function useSound(file: string) {
  const audio = new Audio(file);
  onMounted(() => {
    audio.play();
    audio.volume = 0;
    audio.loop = true;
    animate(audio, {
      volume: 0.5,
      duration: 5000,
    });
  })
}
