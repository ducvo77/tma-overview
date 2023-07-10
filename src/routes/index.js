import { Home, About, Blog, Contact, Shop, Admin } from "../pages";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/blog",
    component: Blog,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/shop",
    component: Shop,
  },
];

export const privateRoutes = [
  {
    path: "/admin",
    component: Admin,
  },
];
