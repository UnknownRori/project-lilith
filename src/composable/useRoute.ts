import { reactive, computed, type ComputedRef } from 'vue';
import { Router } from "@/libs/router";
import router from '@/router';
import { useScrollStore } from '@/stores/ScrollStore';

const route = reactive(new Router(router));
let init = false;

export interface useRouteReturn {
  currentComponent: ComputedRef<unknown>,
  go: (path: string) => void,
  isActive: (path: string) => boolean,
}

export default function useRoute(): useRouteReturn {
  const scroll = useScrollStore();

  if (!init) {
    scroll.$onAction(({ name, after }) => {
      after(() => {
        if (name == 'scrollBy') {
          route?.refreshScroll();
        }
      })
    })
    window.onpopstate = () => {
      route?.refresh();
    }
    route.refresh();
    init = true;
  }


  const currentComponent = computed(() => route?.currentComponent);

  return {
    currentComponent: currentComponent,
    go(path) {
      const scrollValue = route?.go(path)
      if (scrollValue) {
        console.log(scrollValue);
        scroll.scrollTo(scrollValue)
      };
    },
    isActive(path) {
      if (!route) return false;
      return route.isActive(path);
    },
  };
}
