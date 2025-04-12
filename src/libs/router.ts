import { parallaxSceneData } from "@/data/Parallax";
import { useScrollStore } from "@/stores/ScrollStore";

export class Route {
  public name: string;
  public path: string;
  public view: unknown;
  public keyframe: number;

  constructor(name: string, path: string, keyframe: number, view: unknown) {
    this.name = name;
    this.path = path;
    this.view = view;
    this.keyframe = keyframe;
  }

  public resolve(path: string): boolean {
    return path === this.path;
  }
}

export class Router {
  private routes: Route[];
  public currentRoute: Route;
  public currentComponent: unknown;
  public oldComponent: unknown;

  constructor(routes: Route[]) {
    this.routes = routes;
    this.currentRoute = routes[0];
    this.currentComponent = routes[0];

  }

  public refreshScroll() {
    const scroll = useScrollStore();

    for (const route of this.routes) {
      const scene = parallaxSceneData[route.keyframe];
      if (!scene) continue;
      if (scene.start <= scroll.position && scene.end >= scroll.position) {
        this.oldComponent = this.currentComponent;
        this.currentComponent = route.view;
        this.currentRoute = route;
        console.log(route);

        const path = window.location.pathname;
        if (this.currentRoute.path != path) {
          window.history.pushState('', '', path);
        }
        return;
      }
    }
    this.oldComponent = this.currentComponent;
    this.currentComponent = null;
  }


  public refresh() {
    const path = window.location.pathname;
    for (const route of this.routes) {
      if (route.resolve(path)) {
        this.oldComponent = this.currentComponent;
        this.currentComponent = route.view;
        this.currentRoute = route;
        return;
      }
    }
    return null
  }

  public isActive(href: string) {
    return this.currentRoute.resolve(href);
  }

  public go(path: string) {
    for (const route of this.routes) {
      if (route.resolve(path)) {
        const scroll = useScrollStore();
        this.oldComponent = this.currentComponent;
        this.currentComponent = route.view;
        this.currentRoute = route;
        scroll.scrollTo(parallaxSceneData[route.keyframe].start);
        window.history.pushState('', '', path);
        return;
      }
    }

    this.oldComponent = this.currentComponent;
    this.currentComponent = null;
    window.history.pushState('', '', path);
  }
}
