import {
  getRouteHotels,
  getRouteHotelTariffs,
  getRouteEventList, getRouteEventTariffs,
  getRouteNumberCategories, getRouteEventSchedule, getRouteEventPaidOptions, getRouteEventOrders
} from '@/shared/static/router'

export const linksArray = [
  { id: 1, toggle: false },
  { id: 2, toggle: false },
  { id: 3, toggle: false },
  { id: 4, toggle: false }
]

export const hotelSettingsList = [
  {
    id: 1,
    title: 'Список гостиниц',
    route: getRouteHotels()
  },
  {
    id: 2,
    title: 'Категории номеров',
    route: getRouteNumberCategories()
  },
  {
    id: 3,
    title: 'Тарифы',
    route: getRouteHotelTariffs()
  },
  {
    id: 4,
    title: 'Услуги',
    route: '/none'
  },
  {
    id: 5,
    title: 'Трансфер',
    route: '/none'
  }
]

export const hotelManagementList = [
  {
    id: 1,
    title: 'В Разработке',
    route: '/none'
  }
]

export const eventSettingsList = [
  {
    id: 1,
    title: 'Список мероприятий',
    route: getRouteEventList()
  },
  {
    id: 2,
    title: 'Тарифы',
    route: getRouteEventTariffs()
  },
  {
    id: 3,
    title: 'Платные опции',
    route: getRouteEventPaidOptions()
  }
]

export const eventManagementList = [
  {
    id: 1,
    title: 'Расписание',
    route: getRouteEventSchedule()
  },
  {
    id: 2,
    title: 'Заказы',
    route: getRouteEventOrders()
  }
]

