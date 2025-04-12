import { Route } from "@/libs/router";
import { ProfilePage, ProjectsPage, SplashPage } from '@/pages';

export default [
  new Route("home", "/", 0, SplashPage),
  new Route("profile", "/profile", 4, ProfilePage),
  new Route("projects", "/projects", 5, ProjectsPage),
];
