import { Navigate, Route } from '@tanstack/react-location'
import { Settings } from '@/pages/Settings'
import {
  AppRoutes,
  getNumberCategoriesRoutes,
  getRouteMain,
  getRouteNumberCategories,
  getRouteSettings,
  getSettingsRoutes,
} from '@/shared/static/router'
import { NumberCategoriesAddEditPage, NumberCategoriesPage } from '@/pages/NumberCategories'


// Каждый маршрут отделен своим ключом объекта, внутри путь и элемент

export const routerConfig: Record<AppRoutes, Route> = {
  [AppRoutes.MAIN]: {
    path: getRouteMain(),
    element: <Navigate to={getRouteNumberCategories()}/>
  },
  [AppRoutes.SETTINGS]: {
    path: getRouteSettings(),
    children: [
      {
        path: getSettingsRoutes.MAIN,
        element: <Settings/>
      }
    ]
  },
  [AppRoutes.NUMBER_CATEGORIES]: {
    path: getRouteNumberCategories(),
    children: [
      {
        path: getNumberCategoriesRoutes.MAIN,
        element: <NumberCategoriesPage/>
      },
      {
        path: getNumberCategoriesRoutes.ADD_EDIT_NUMBER_CATEGORIES,
        element: <NumberCategoriesAddEditPage/>
      }
    ]
  }
}
