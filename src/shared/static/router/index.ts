// TODO здесь добавить AppRoutes в будущем и функции на пути

// Задаем enum ключи, для хорошего отделения маршрутов

export enum AppRoutes {
  MAIN = 'main',
  SETTINGS = 'settings',
  NUMBER_CATEGORIES = 'number-categories',
}


// Путь к каждому маршруту

export const getRouteMain = () => '/'
export const getRouteSettings = () => '/settings'
export const getRouteNumberCategories = () => '/number-categories'


// Дополнительные пути

export enum getResetRoutes {
  MAIN = '/',
  PHONE = '/phone',
  EMAIL = '/email',
  SUCCESS = '/success'
}

export enum getSettingsRoutes {
  MAIN = '/',
  ADD_EDIT_CARD = '/add-edit-card'
}

export enum getNumberCategoriesRoutes {
  MAIN = '/',
  ADD_EDIT_NUMBER_CATEGORIES = '/add-edit-number-categories'
}

// Доступные маршруты при отсутствии пользователя

// export function availableRoutes(location: string) {
//   return (
//     location !== AppRoutes.AUTHORIZATION &&
//     location !== AppRoutes.REGISTRATION &&
//     location !== AppRoutes.OAUTH &&
//     location !== AppRoutes.SURVEY
//   )
// }



