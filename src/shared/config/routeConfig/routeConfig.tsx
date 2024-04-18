import {RouteObject} from "react-router-dom";
import {Home} from "../../../routes/home";
import React from "react";

export enum AppRoutes {
  HOME = 'home',

  // last
  NOT_FOUND = 'not_found',
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.HOME]: '/',

  // last
  [AppRoutes.NOT_FOUND]: '*'
}

export const routeConfig: RouteObject[] = [
  {
    path: RoutePath[AppRoutes.HOME],
    element: <Home />
  },
  {
    path: RoutePath[AppRoutes.NOT_FOUND],
    element: <Home />
    // element: <div>404</div>
  }
]
