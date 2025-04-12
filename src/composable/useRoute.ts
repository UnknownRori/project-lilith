import { ref, type Ref } from 'vue';
import { Router } from "@/libs/router";
import router from '@/router';
import { useScrollStore } from '@/stores/ScrollStore';

const route = ref<Router | null>(null);

export default function useRoute(): Ref<Router> {
  if (route.value == null) {
    route.value = new Router(router)
    const scroll = useScrollStore();
    scroll.$subscribe(() => route.value?.refreshScroll());
  }

  route.value.refresh();


  return route as Ref<Router>;
}
