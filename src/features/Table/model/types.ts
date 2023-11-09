import { eventOrdersTableColumns } from '@/features/Table/static'

export interface TableColumnsType {
  id: string,
  title: string,
  key: string,
  isIncluded: boolean
  className?: { cell: string, cellContent: string }
}
export interface HotelsType {
  id: string
  name: string
  image: string
  number_of_rooms: number
  city: string
  country: string
  isChecked: boolean
}

export interface NumberCategoriesType {
  id: string,
  isChecked: boolean,
  name: string,
  abbreviated_ame: string,
  external_code: number,
  photo: number,
  main_places: number,
  additional_seats: number,
}

export interface TariffsType {
  id: string,
  name: string,
  period_of_validity: string,
  external_code: number,
  isChecked: boolean,
}
export interface ListOfEventsDataType {
  id: string,
  image: string,
  name: string,
  reviews: { positive: number, neutral: number, negative: number },
  number_of_seats: number,
  photo: number,
  type: string,
  status: {name: string, statusStyle: string}
}
export interface ScheduleDataType {
  id: string,
  start_time: string,
  date_of_the_event: string,
  number_of_seats: number,
  number_of_orders: number,
  number_of_available_seats: number,
  duration: string,
}
export interface PaidOptionsDataType {
  id: string,
  name: string,
  type: string,
  category: { icon: any, title: string},
  price: string,
}

export interface EventOrdersDataType {
  id: string,
  name: string,
  date_time: string,
  order_amount: number,
  source: string,
  order_type:  {name: string, statusStyle: string}
}
