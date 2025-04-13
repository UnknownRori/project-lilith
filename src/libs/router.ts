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

  constructor(routes: Route[]) {
    this.routes = routes;
    this.currentRoute = routes[0];
    this.currentComponent = routes[0];

  }

  public getKeyFrame() {
    return this.currentRoute.keyframe;
  }

  public refreshScroll() {
    const scroll = useScrollStore();

    for (const route of this.routes) {
      const scene = parallaxSceneData[route.keyframe];
      if (!scene) continue;
      if (scene.start < scroll.position && scene.end > scroll.position) {
        this.currentComponent = route.view;
        this.currentRoute = route;

        const path = window.location.pathname;
        document.title = this.currentRoute.name;
        if (this.currentRoute.path != path) {
          window.history.pushState('', '', this.currentRoute.path);
        }
        return;
      }
    }

    this.currentComponent = null;
    this.currentRoute = this.routes[0];
    const path = window.location.pathname;
    document.title = this.currentRoute.name;
    if (this.currentRoute.path != path) {
      window.history.pushState('', '', this.currentRoute.path);
    }
  }


  // Return the correct scroll
  public refresh(): number | null {
    const path = window.location.pathname;
    for (const route of this.routes) {
      if (route.resolve(path)) {
        this.currentComponent = route.view;
        this.currentRoute = route;
        return parallaxSceneData[route.keyframe].start;
      }
    }
    this.currentRoute = this.routes[0];
    return null
  }

  public isActive(href: string): boolean {
    return this.currentRoute.resolve(href);
  }

  // Return the correct scroll
  public go(path: string): number | null {
    for (const route of this.routes) {
      if (route.resolve(path)) {
        this.currentComponent = route.view;
        this.currentRoute = route;
        window.history.pushState('', '', path);
        document.title = this.currentRoute.name;
        return parallaxSceneData[route.keyframe].start;
      }
    }

    this.currentComponent = null;
    document.title = "404";
    window.history.pushState('', '', path);
    return null;
  }
}
