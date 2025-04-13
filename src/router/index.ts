import { Route } from "@/libs/router";
import { NotFound, ProfilePage, ProjectsPage, ResumePage, SplashPage } from '@/pages';

export default [
  new Route("Home", "/", 0, SplashPage),
  new Route("Profile", "/profile", 4, ProfilePage),
  new Route("Projects", "/projects", 6, ProjectsPage),
  new Route("Resume", "/resume", 8, ResumePage),

  new Route("404", "", 0, NotFound),
];
