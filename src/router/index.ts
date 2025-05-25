import { parallaxSceneData } from '@/data/Parallax';
import { ProfilePage, ProjectsPage, SplashPage } from '@/pages';
import useBackground from '@/stores/useBackground';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Splash",
      component: SplashPage,
      meta: { scene: 0 },
    },
    {
      path: "/profile",
      name: "Profile",
      component: ProfilePage,
      meta: { scene: 2 },
    },
    {
      path: "/projects",
      name: "Projects",
      component: ProjectsPage,
      meta: { scene: 1 },
    },
  ]
});

router.beforeEach(async function(to, _from, next) {
  useBackground().setScene(parallaxSceneData[to.meta.scene as number]);
  return next();
})

export default router;
