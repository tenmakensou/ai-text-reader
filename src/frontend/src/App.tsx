import { Layout } from "@/components/Layout";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Outlet,
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import { Suspense, lazy } from "react";

const Home = lazy(() => import("@/pages/Home"));
const Reader = lazy(() => import("@/pages/Reader"));

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Suspense
        fallback={
          <div className="flex-1 p-6 space-y-4">
            <Skeleton className="h-32 w-full rounded-xl" />
            <Skeleton className="h-48 w-full rounded-xl" />
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </Layout>
  ),
});

const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: Home,
});

const readerRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/reader",
  component: Reader,
});

const routeTree = rootRoute.addChildren([homeRoute, readerRoute]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
