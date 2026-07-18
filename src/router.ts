import { createRouter, createWebHistory } from 'vue-router';
import { layouts } from './layouts';
import HomePage from './pages/Home.page.vue';
import DashboardPage from './pages/Dashboard.page.vue';
import NotFound from './pages/404.page.vue';
import { contents } from '@/core/content.loader';
import { config } from './config';

// ✅ New routes: /tool/:slug, /cheatsheet/:slug, /template/:slug ...
const contentRoutes = contents.map(item => ({
  path: `/${item.type}/${item.slug}`,
  name: `${item.type}-${item.slug}`,
  component: item.component,

  // ✅ IMPORTANT: tool.layout.vue expects these meta fields
  meta: {
    isTool: item.type === 'tool', // ✅ tool layout uses this
    layout: layouts.toolLayout,   // ✅ keep same UI

    // ✅ UI Heading + Description in Tool layout
    name: item.title,
    description: item.description,

    // ✅ Useful extras (optional)
    keywords: item.keywords,
    contentType: item.type,
    icon: item.icon,
    layoutMode: item.layoutMode ?? 'default',
  },
}));

// ✅ Backward compatibility (old URLs won't 404)
const legacyRedirects = contents.map(item => ({
  path: `/tools/${item.slug}`,
  redirect: `/${item.type}/${item.slug}`,
}));

// ✅ Category dashboard routes
const categoryRoutes = [
  {
    path: '/:type',
    name: 'dashboard',
    component: DashboardPage,
    meta: { layout: layouts.categoryLayout },
  },
];

const router = createRouter({
  history: createWebHistory(config.app.baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
      meta: { layout: layouts.base },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue'),
      meta: { layout: layouts.base },
    },

    ...categoryRoutes,
    ...contentRoutes,
    ...legacyRedirects,

    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
