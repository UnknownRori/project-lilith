import { reactive, computed, type ComputedRef } from 'vue';
import { Route, Router } from "@/libs/router";
import router from '@/router';
import { useScrollStore } from '@/stores/ScrollStore';
import { parallaxSceneData } from '@/data/Parallax';

const route = reactive(new Router(router));
let init = false;

export interface useRouteReturn {
  getActiveRoute: () => Route,
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
    getActiveRoute() {
      return route.currentRoute;
    },
    go(path) {
      const scrollValue = route?.go(path)
      if (scrollValue) {
        scroll.scrollTo(scrollValue)
      };
    },
    isActive(path) {
      if (!route) return false;
      return route.isActive(path);
    },
  };
}
