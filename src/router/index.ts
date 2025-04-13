import { Route } from "@/libs/router";
import { NotFound, ProfilePage, ProjectsPage, SplashPage } from '@/pages';

export default [
  new Route("Home", "/", 0, SplashPage),
  new Route("Profile", "/profile", 4, ProfilePage),
  new Route("Projects", "/projects", 5, ProjectsPage),

  new Route("404", "", 0, NotFound),
];
