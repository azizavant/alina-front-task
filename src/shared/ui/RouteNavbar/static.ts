import {
  getHotelRoutes,
  getHotelTariffsRoutes,
  getEventListRoutes,
  getEventTariffRoutes,
  getNumberCategoriesRoutes,
  getRouteHotels,
  getRouteHotelTariffs,
  getRouteEventList,
  getRouteEventTariffs,
  getRouteNumberCategories,
  getRouteEventSchedule,
  getRouteSettings,
  getEventScheduleRoutes,
  getSettingsRoutes,
  getRouteEventPaidOptions, getEventPaidOptionsRoutes, getRouteEventOrders, getEventOrdersRoutes
} from '@/shared/static/router'
import {
  eventManagementList,
  eventSettingsList,
  hotelManagementList,
  hotelSettingsList
} from '@/widgets/Sidebar/static'
import { hotelNavbarList } from '@/pages/HotelsList/static'
import { hotelTariffNavbarList } from '@/pages/HotelTariffs/static'
import { settingsNavbarList } from '@/pages/Settings/static'

export const hotelSettings = 'Настройки гостиниц' as const
export const hotelManagement = 'Управление гостиницей' as const
export const eventSettings = 'Настройки мероприятий' as const
export const eventManagement = 'Управление мероприятиями' as const
export const settings = 'Общие настройки' as const

const getTitle = (sectionName: string, routeTitle: string) => {
  switch (sectionName) {
    case hotelSettings:
      return hotelSettingsList.find(i => i.route === routeTitle)?.title ?? ''

    case hotelManagement:
      return hotelManagementList.find(i => i.route === routeTitle)?.title ?? ''

    case eventSettings:
      return eventSettingsList.find(i => i.route === routeTitle)?.title ?? ''

    case eventManagement:
      return eventManagementList.find(i => i.route === routeTitle)?.title ?? ''

    default:
      return ''
  }
}

// Hotel settings / Настройки гостиниц
const hotelListTitle = getTitle(hotelSettings, getRouteHotels())
const numberCategoriesTitle = getTitle(hotelSettings, getRouteNumberCategories())
const hotelTariffsTitle = getTitle(hotelSettings, getRouteHotelTariffs())
// Event settings / Настройки мероприятий
const eventListTitle = getTitle(eventSettings, getRouteEventList())
const eventTariffsTitle = getTitle(eventSettings, getRouteEventTariffs())
const eventPaidOptionsTitle = getTitle(eventSettings, getRouteEventPaidOptions())
// Event management / Управления мероприятиями
const eventScheduleTitle = getTitle(eventManagement, getRouteEventSchedule())
const eventOrdersTitle = getTitle(eventManagement, getRouteEventOrders())


export const routeTitlesNavbar = {
  //// Hotel settings / Настройки гостиниц
  // Hotel List
  [getRouteHotels()]: [hotelSettings, [getRouteHotels(), hotelListTitle]],
  [getRouteHotels() + getHotelRoutes.ADD_EDIT_HOTEL]: [
    hotelSettings, [getRouteHotels(), hotelListTitle], hotelNavbarList.map(i => i.title)
  ],
  // Number Categories
  [getRouteNumberCategories()]: [hotelSettings, [getRouteNumberCategories(), numberCategoriesTitle]],
  [getRouteNumberCategories() + getNumberCategoriesRoutes.ADD_EDIT_NUMBER_CATEGORIES]: [
    hotelSettings, [getRouteNumberCategories(), numberCategoriesTitle], ['Добавление (редактирование) номера']
  ],
  // Hotel Tariffs
  [getRouteHotelTariffs()]: [hotelSettings, [getRouteHotelTariffs(), hotelTariffsTitle]],
  [getRouteHotelTariffs() + getHotelTariffsRoutes.ADD_EDIT_HOTEL_TARIFFS]: [
    hotelSettings, [getRouteHotelTariffs(), hotelTariffsTitle], hotelTariffNavbarList.map(i => i.title)
  ],

  //// Event settings / Настройки мероприятий
  // Event List
  [getRouteEventList()]: [eventSettings, [getRouteEventList(), eventListTitle]],
  [getRouteEventList() + getEventListRoutes.ADD_EDIT_EVENT_LIST]: [
    eventSettings, [getRouteEventList(), eventListTitle], ['Добавление (редактирование) мероприятия']
  ],
  // Event Tariffs
  [getRouteEventTariffs()]: [eventSettings, [getRouteEventTariffs(), eventTariffsTitle]],
  [getRouteEventTariffs() + getEventTariffRoutes.ADD_EDIT_EVENT_TARIFF]: [
    eventSettings, [getRouteEventTariffs(), eventTariffsTitle], ['Добавление (редактирование) тарифа']
  ],
  // Event Paid Options
  [getRouteEventPaidOptions()]: [eventSettings, [getRouteEventPaidOptions(), eventPaidOptionsTitle]],
  [getRouteEventPaidOptions() + getEventPaidOptionsRoutes.ADD_EDIT_EVENT_PAID_OPTIONS]: [
    eventSettings, [getRouteEventPaidOptions(), eventPaidOptionsTitle], ['Добавление (редактирование) опции']
  ],

  //// Event management / Управления мероприятиями
  // Event Schedule / Расписание
  [getRouteEventSchedule()]: [eventManagement, [getRouteEventSchedule(), eventScheduleTitle]],
  [getRouteEventSchedule() + getEventScheduleRoutes.ADD_EDIT_EVENT_SCHEDULE]: [
    eventManagement, [getRouteEventSchedule(), eventScheduleTitle], ['Добавление (редактирование) расписания']
  ],
  [getRouteEventSchedule() + getEventScheduleRoutes.ADD_ORDER]: [
    eventManagement, [getRouteEventSchedule(), eventScheduleTitle], ['Создание заказа']
  ],
  // Event Orders
  [getRouteEventOrders()]: [eventManagement, [getRouteEventOrders(), eventOrdersTitle]],
  [getRouteEventOrders() + getEventOrdersRoutes.ADD_EDIT_EVENT_ORDER]: [
    eventManagement, [getRouteEventOrders(), eventOrdersTitle], ['Добавление (редактирование) заказов']
  ],

  //// Settings / Настройки
  [getRouteSettings()]: [settings, 'empty', settingsNavbarList.map(i => i.title)],
  [getRouteSettings() + getSettingsRoutes.ADD_EDIT_CARD]: [
    settings, 'empty', ['Банковские реквизиты'], ['Добавление банковского реквизита']
  ]
}

