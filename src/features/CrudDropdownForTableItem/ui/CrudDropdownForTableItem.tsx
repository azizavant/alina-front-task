import React from 'react'
import { Dropdown } from '@/shared/ui/Dropdown/Dropdown'
import EllipsisIcon from '@/features/Table/icons/EllipsisIcon.svg'
import clsx from 'clsx'
import {
  addAnOrder,
  changeButton,
  deleteButton,
  saveToClipboard,
  shareLink, DropdownListType, getDropdownListByRoute, listOfOrder
} from '@/features/CrudDropdownForTableItem/static'
import { useLocation, useNavigate } from '@tanstack/react-location'
import {
  EventOrdersDataType,
  HotelsType,
  ListOfEventsDataType,
  NumberCategoriesType, PaidOptionsDataType, ScheduleDataType,
  TableColumnsType,
  TariffsType
} from '@/features/Table/model/types'
import { MockGuestList, MockOrderDetailsType } from '@/pages/EventOrdersPage/ui/EventAddOrderPage/static'

export const CrudDropdownForTableItem = ({ entityId }: { entityId: string }) => {

  const { current: { pathname } } = useLocation()
  const navigate = useNavigate()

  const list = getDropdownListByRoute[pathname]
  const onClickReducer = ({ id, link }: DropdownListType) => {
    switch (id) {
      case addAnOrder:
        navigate({ to: link, search: prev => {
          return {...prev, order_id: entityId}
          } })
        break
      case deleteButton:
        // console.log(entityId)
        // console.log(id)
        // console.log(link)
        // console.log(actionType)
        break
      case changeButton:
        // console.log(entityId)
        // console.log(id)
        // console.log(link)
        // console.log(actionType)
        break
      case saveToClipboard:
        // console.log(entityId)
        // console.log(actionType)
        break
      case shareLink:
        // console.log(entityId)
        // console.log(actionType)
        break
      case listOfOrder:
        // console.log(entityId)
        // console.log(actionType)
        break
      default:
        break
    }
  }

  return (
    <Dropdown className="!w-48"
              targetItem={ <EllipsisIcon/> }
              activeTargetItemClassName="rounded-full opacity-60 h-8 w-8 bg-borderGray shadow-lg"
    >
      {
        list
          ? (
            list.map(item => (
              <button
                className={ clsx('py-2 px-4 first:pt-3 w-full last:pb-3 text-sm text-gray-700 font-normal cursor-pointer hover:bg-[#EEF4FF] flex items-center gap-3') }
                key={ item.id }
                onClick={ () => {
                  onClickReducer(item)
                } }
              >
                { item.icon && item.icon }
                { item.title }
              </button>
            )))
          : null
      }
    </Dropdown>
  )
}

