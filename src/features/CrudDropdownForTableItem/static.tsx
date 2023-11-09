import ShareLinkIcon from '@/shared/assets/icons/ShareLink.svg'
import { EditIcon } from '@/shared/ui/SVGComponents/EditIcon'
import { DeleteIcon } from '@/shared/ui/SVGComponents/DeleteIcon'
import { DownloadIcon } from '@/shared/ui/SVGComponents/DownloadIcon'
import CopyIcon from '@/shared/assets/icons/CopyIcon.svg'
import ListIcon from '@/shared/assets/icons/ListIcon.svg'
import React, { ReactNode } from 'react'
import {
  AppRoutes,
  getEventScheduleRoutes,
  getRouteEventList,
  getRouteEventOrders,
  getRouteEventPaidOptions,
  getRouteEventSchedule,
  getRouteEventTariffs,
  getRouteHotels,
  getRouteHotelTariffs,
  getRouteNumberCategories,
  getRouteSurvey
} from '@/shared/static/router'

export type IdActionType =
  'addAnOrder'
  | 'changeButton'
  | 'deleteButton'
  | 'saveToClipboard'
  | 'shareLink'
  | 'listOfOrder'
  | 'downloadButton'

export interface DropdownListType {
  id: IdActionType,
  title: string,
  icon: ReactNode,
  link: string
}

export const addAnOrder = 'addAnOrder'
export const changeButton = 'changeButton'
export const deleteButton = 'deleteButton'
export const downloadButton = 'downloadButton'
export const saveToClipboard = 'saveToClipboard'
export const shareLink = 'shareLink'
export const listOfOrder = 'listOfOrder'

export const scheduleDropdownList: DropdownListType[] = [
  {
    id: addAnOrder,
    title: 'Добавить заказ',
    icon: <ShareLinkIcon/>,
    link: getRouteEventSchedule() + getEventScheduleRoutes.ADD_ORDER
  },
  {
    id: changeButton,
    title: 'Редактировать',
    icon: <EditIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''

  },
  {
    id: deleteButton,
    title: 'Удалить',
    icon: <DeleteIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''
  },
  {
    id: listOfOrder,
    title: 'Список заказов',
    icon: <ListIcon/>,
    link: ''
  }
]
export const dropdownList: DropdownListType[] = [
  {
    id: changeButton,
    title: 'Редактировать',
    icon: <EditIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''
  },
  {
    id: saveToClipboard,
    title: 'Копировать',
    icon: <CopyIcon/>,
    link: ''
  },
  {
    id: deleteButton,
    title: 'Удалить',
    icon: <DeleteIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''
   },
  {
    id: shareLink,
    title: 'Поделиться',
    icon: <ShareLinkIcon/>,
    link: ''
  }
]

export const orderDropdownList: DropdownListType[] = [
  {
    id: changeButton,
    title: 'Редактировать',
    icon: <EditIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''
  },
  {
    id: deleteButton,
    title: 'Удалить',
    icon: <DeleteIcon className="!w-[16px] !h-[16px]" color="#344054"/>,
    link: ''
  },
  {
    id: downloadButton,
    title: 'Скачать',
    icon: <DownloadIcon className="!w-[16px] !h-[16px]"/>,
    link: ''
  },
]

export const getDropdownListByRoute = {
  [getRouteEventSchedule()]: scheduleDropdownList,
  [getRouteHotels()]: dropdownList,
  [getRouteNumberCategories()]: dropdownList,
  [getRouteHotelTariffs()]: dropdownList,
  [getRouteEventList()]: dropdownList,
  [getRouteEventTariffs()]: dropdownList,
  [getRouteEventPaidOptions()]: dropdownList,
  [getRouteEventOrders()]: orderDropdownList,
}