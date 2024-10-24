import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import { useAuthStore } from "@/stores/auth";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    redirect: "/dashboard",
    component: () => import("@/layouts/default-layout/DefaultLayout.vue"),
    meta: {
      middleware: "auth"
    },
    children: [
      {
        path: "/dashboard",
        name: "dashboard",
        component: () => import("@/views/application/Dashboard.vue"),
        meta: {
          pageTitle: "Dashboard",
          breadcrumbs: ['router.default.home', 'router.default.dashboard'],
        },
      },
      {
        path: "/account/account",
        name: "account",
        component: () => import("@/views/account/Account.vue"),
        meta: {
          pageTitle: "Workspaces",
          breadcrumbs: ['router.default.home', 'router.default.deals'],
        },
      },
      // {
      //   path: "/account/workspace",
      //   name: "workspace",
      //   component: () => import("@/views/account/Workspace.vue"),
      //   meta: {
      //     pageTitle: "Workspaces",
      //     breadcrumbs: ['router.default.home', 'router.default.deals'],
      //   },
      // },
      {
        path: "/crm/deals",
        name: "deals",
        component: () => import("@/views/application/crm/deals.vue"),
        meta: {
          pageTitle: "Deals",
          breadcrumbs: ['router.default.home', 'router.default.deals'],
        },
      },
      {
        path: "/commerce/sale-center",
        name: "sale-center",
        component: () => import("@/views/application/commerce/CommerceCenter.vue"),
        meta: {
          pageTitle: "Deals",
          breadcrumbs: ['router.default.home', 'router.default.sale_center'],
        },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/system/Error404.vue"),
        meta: {
          breadcrumbs: ['router.default.home', 'router.system.error_404'],
          pageTitle: "Error 404",
        },
      },
      {
        path: "/500",
        name: "500",
        component: () => import("@/views/system/Error500.vue"),
        meta: {
          pageTitle: "Error 500",
        },
      },
    ]
  },
  {
    path: "/",
    component: () => import("@/layouts/AuthLayout.vue"),
    children: [
      {
        path: "/sign-in",
        name: "sign-in",
        component: () =>
            import("@/views/authentication/SignIn.vue"),
        meta: {
          pageTitle: "Sign In",
        },
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/404",
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    // If the route has a hash, scroll to the section with the specified ID; otherwise, scroll to the top of the page.
    if (to.hash) {
      return {
        el: to.hash,
        top: 80,
        behavior: "smooth",
      };
    } else {
      return {
        top: 0,
        left: 0,
        behavior: "smooth",
      };
    }
  },
});

// Сохранение последнего маршрута после каждого перехода
router.afterEach((to) => {
  // Сохраняем последний маршрут только для защищённых маршрутов
  if (to.meta.middleware === "auth") {
    localStorage.setItem("lastRoute", to.path); // Сохраняем только чистый путь без хэша и query
  }
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // current page view title
  document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;

  // verify auth token before each page change
  authStore.verifyAuth();

  // before page access check if page requires authentication
  if (to.name === "sign-in" && authStore.isAuthenticated) {
    next({name: "dashboard"})
  }
  if (to.meta.middleware == "auth") {
    if (authStore.isAuthenticated) {
      next();
    } else {
      next({ name: "sign-in" });
    }
  } else {
    next();
  }
});

// router.beforeEach((to, from, next) => {
//   const authStore = useAuthStore();
//
//   // Устанавливаем заголовок страницы
//   document.title = `${to.meta.pageTitle} - ${import.meta.env.VITE_APP_NAME}`;
//
//   // Проверяем токен авторизации перед каждым переходом
//   authStore.verifyAuth();
//
//   // Если пользователь уже авторизован и пытается зайти на страницу входа, перенаправляем на dashboard
//   if (to.name === "sign-in" && authStore.isAuthenticated) {
//     next({ name: "dashboard" });
//     return;
//   }
//
//   // Проверка на защиту маршрута авторизацией
//   if (to.meta.middleware === "auth") {
//     if (authStore.isAuthenticated) {
//       // Проверяем, это первый переход (from.name === null) и есть ли сохранённый маршрут
//       const lastRoute = localStorage.getItem("lastRoute");
//
//       // Перенаправляем на сохранённый маршрут, если это первый переход и текущий путь - "/dashboard"
//       if (!from.name && lastRoute && to.path === "/dashboard" && lastRoute !== "/dashboard") {
//         next(lastRoute); // Перенаправление на последний маршрут
//         return;
//       }
//
//       next(); // Продолжаем стандартное поведение, если нет нужды в перенаправлении
//     } else {
//       // Если пользователь не авторизован, перенаправляем на страницу входа
//       next({ name: "sign-in" });
//     }
//   } else {
//     // Стандартное поведение для маршрутов без middleware "auth"
//     next();
//   }
// });



export default router;
