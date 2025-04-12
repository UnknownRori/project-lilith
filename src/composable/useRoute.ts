import { ref, type Ref } from 'vue';
import { Router } from "@/libs/router";
import router from '@/router';
import { useScrollStore } from '@/stores/ScrollStore';

const route = ref<Router | null>(null);

export default function useRoute(): Ref<Router> {
  if (route.value == null) {
    const scroll = useScrollStore();
    route.value = new Router(router);
    scroll.$onAction(({ name, after }) => {
      after(() => {
        if (name == 'scrollBy') {
          route.value?.refreshScroll();
        }
      })
    })
    window.onpopstate = () => {
      route.value?.refresh();
    }
  }

  route.value.refresh();


  return route as Ref<Router>;
}
