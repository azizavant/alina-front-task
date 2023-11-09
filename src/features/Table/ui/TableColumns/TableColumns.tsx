import React, { useState } from 'react'
import {
  EventOrdersDataType,
  HotelsType,
  ListOfEventsDataType,
  NumberCategoriesType, PaidOptionsDataType, ScheduleDataType,
  TableColumnsType,
  TariffsType
} from '@/features/Table/model/types'
import { CheckboxSquare } from '@/shared/ui/Checkbox'
import EditIcon from '@/features/Table/icons/EditIcon.svg'
import DeleteIcon from '@/features/Table/icons/DeleteIcon.svg'
import clsx from 'clsx'
import ExclamationMarkRedIcon from '@/features/Table/icons/ExclamationMarkRed.svg'
import { CrudDropdownForTableItem } from '@/features/CrudDropdownForTableItem'
import ChildIcon from '@/widgets/EventPaidOptionsSettings/icons/Child.svg'
import { Button } from '@/shared/ui/Button'
import { MySwitch } from '@/shared/ui/ToggleSwitch/Switch'
import { getReviewsStyle } from '@/shared/lib/classNames/getStyle'
// import { MockGuestList, MockOrderDetailsType } from '@/pages/EventOrdersPage/ui/EventAddOrderPage/static'

interface TableColumnsPropsType {
  tableColumns: TableColumnsType[],
  mockData: NumberCategoriesType[] | HotelsType[] | TariffsType[] | ListOfEventsDataType[] | ScheduleDataType[]
    | PaidOptionsDataType[] | EventOrdersDataType[]
}

export const TableColumns = ({ tableColumns, mockData }: TableColumnsPropsType) => {

  const [data, setData] = useState(mockData)
  let key = 0
  const onChangeHandler = (id: string, prev: boolean) => {
    const foundHotel = (data as (HotelsType | NumberCategoriesType | TariffsType)[]).find((item) => item.id === id)
    if (foundHotel) {
      foundHotel.isChecked = prev
    }
    setData([...data] as [])
  }

  return (
    <>
      {
        data.map((tableItem, j) => (
          <tr className="border-y border-[#D0D5DD] bg-white" key={ j * key + 'tr' }>
            {
              tableColumns.map((column, i) => {
                ++key
                switch (column.key) {
                  case 'isCheckbox':
                    if ('isChecked' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx('py-3 pl-2', column.className?.cell) }>
                          <CheckboxSquare
                            className={ clsx(column.className?.cellContent) }
                            checked={ tableItem.isChecked }
                            onChange={ (prev) => onChangeHandler(tableItem.id, prev) }
                          />
                        </td>
                      )
                    }
                    break
                  case 'isToggle':
                    if ('isChecked' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx('py-3', column.className?.cell) }>
                          <MySwitch id={ tableItem.id.toString() }
                            // className={ clsx(column.className?.cellContent) }
                                    checked={ tableItem.isChecked }
                                    width={ 40 }
                                    height={ 21 }
                                    onChangeHandler={ (prev) => {
                                      onChangeHandler(tableItem.id, prev)
                                    } }
                          />
                        </td>
                      )
                    }
                    break
                  case 'reviews':
                    if ('reviews' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx('py-3', column.className?.cell) }>
                            <span className="flex flex-row justify-around">
                              {
                                Object.entries(tableItem.reviews).map(([key, count]) => (
                                  <p key={ key }
                                     className={ clsx(getReviewsStyle(key), 'text-sm font-medium text-gray rounded-2xl px-3 py-0.5', column.className?.cellContent) }
                                  >
                                    { count }
                                  </p>
                                ))
                              }
                            </span>
                        </td>
                      )
                    }
                    break
                  case 'status':
                    if ('status' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx(column.className?.cell) }>
                            <span className="flex justify-center">
                              <p className={ clsx('text-sm font-medium text-gray rounded-2xl px-3', column.className?.cellContent, tableItem.status.statusStyle) }>
                              { tableItem.status.name }
                                   { tableItem.status.name === 'Возвращен' && (
                                     <ExclamationMarkRedIcon/>
                                   ) }
                              </p>
                            </span>
                        </td>
                      )
                    }
                    break
                  case 'order_type':
                    if ('order_type' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx(column.className?.cell) }>
                            <span className="flex justify-center">
                              <p className={ clsx('text-sm font-medium text-gray rounded-2xl px-3', column.className?.cellContent, tableItem.order_type.statusStyle) }>
                              { tableItem.order_type.name }
                              </p>
                            </span>
                        </td>
                      )
                    }
                    break
                  case 'name':
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-3', column.className?.cell) }>
                        <p className={ clsx('text-sm font-medium gap-3', column.className?.cellContent) }>
                          { 'image' in tableItem && tableItem.image &&
                            <img src={ tableItem.image }
                                 alt="icon"
                                 className="w-[40px] h-[40px] rounded-[100%]"
                            />
                          }
                          { 'name' in tableItem && tableItem?.name ? tableItem.name : '' }
                        </p>
                      </td>
                    )
                  // case 'code':
                  //   return (
                  //     <td key={ i + key + column.key } className={ clsx('py-3', column.className?.cell) }>
                  //       <p className={ clsx('text-sm font-medium gap-3', column.className?.cellContent) }>
                  //         { 'code' in tableItem && tableItem?.code ? tableItem.code : '' }
                  //       </p>
                  //     </td>
                  //   )
                  case 'changeButton':
                    return (
                      <td key={ j + i + key } className={ clsx('w-[50px]', column.className?.cell) }>
                        <Button>
                          <EditIcon/>
                        </Button>
                      </td>
                    )
                  case 'removeButton':
                    return (
                      <td key={ i + key + column.key } className={ clsx('w-[50px] pr-5', column.className?.cell) }>
                        <Button>
                          <DeleteIcon/>
                        </Button>
                      </td>
                    )
                  // case 'start_time':
                  //   if ('start_time' in tableItem) {
                  //     return (
                  //       <td key={ Math.random() } className={ clsx('xl:h-[94px] w-[130px]', column.className?.cell) }>
                  //       <span className="flex flex-wrap gap-1 items-center justify-start">
                  //         { tableItem.start_time.slice(0, 3).map((time: string) => (
                  //           <p
                  //             className={ clsx('text-xs bg-[#F2F4F7] rounded-xl font-medium text-blue py-1 px-2', column.className?.cellContent) }
                  //             key={ Math.random() }
                  //           >
                  //             { time }
                  //           </p>
                  //         )) }
                  //         {
                  //           tableItem.start_time.length > 3 && (
                  //             <>
                  //               <Dropdown targetItem={
                  //                 <p className="text-xs bg-[#F2F4F7] rounded-xl font-medium text-gray-700 py-1 px-2">
                  //                   +{ tableItem.start_time.length - 3 }
                  //                 </p>
                  //               }
                  //                         className="!right-9 py-1 px-2"
                  //                         isHover
                  //               >
                  //                 { tableItem.start_time.slice(3).map((time: string) => (
                  //                   <div
                  //                     className={ clsx('text-xs bg-[#F2F4F7] rounded-xl font-medium text-blue py-1 px-2 my-2 mx-1') }
                  //                     key={ tableItem.id }
                  //                   >
                  //                     { time }
                  //                   </div>
                  //                 )) }
                  //               </Dropdown>
                  //
                  //             </>
                  //           )
                  //         }
                  //       </span>
                  //       </td>
                  //     )
                  //   }
                  //   break
                  case 'category':
                    if ('category' in tableItem) {
                      return (
                        <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                          <p
                            className={ clsx('text-sm font-normal text-gray gap-3', column.className?.cellContent) }>
                            { tableItem.category.icon }
                            <ChildIcon/>
                            { tableItem.category.title }
                          </p>
                        </td>
                      )
                    }
                    break
                  case 'action':
                    return (
                      <td key={ i + key + column.key } className="w-[50px] pr-3">
                        <div className="w-full !justify-center">
                          <CrudDropdownForTableItem entityId={ tableItem.id }/>
                        </div>
                      </td>
                    )
                  case 'photo':
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                          <span className="flex justify-center items-center">
                            <p className={ clsx('bg-[#F2F4F7] rounded-2xl text-gray-700 text-center text-sm font-medium w-8 px-0.5', column.className?.cellContent) }>
                              { tableItem?.[column.key as keyof typeof tableItem] }
                            </p>
                          </span>
                      </td>
                    )
                  case 'number_of_seats':
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                          <span className="flex justify-center items-center">
                            <p className={ clsx('bg-indigo-50 text-indigo-700 rounded-2xl text-center text-sm font-medium w-8 px-0.5', column.className?.cellContent) }>
                              { tableItem?.[column.key as keyof typeof tableItem] }
                            </p>
                          </span>
                      </td>
                    )
                  case 'number_of_orders':
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                          <span className="flex justify-center items-center">
                            <p className={ clsx('bg-error-50 text-error-700 rounded-2xl text-center text-sm font-medium w-8 px-0.5', column.className?.cellContent) }>
                              { tableItem?.[column.key as keyof typeof tableItem] }
                            </p>
                          </span>
                      </td>
                    )
                  case 'number_of_available_seats':
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                          <span className="flex justify-center items-center">
                            <p className={ clsx('bg-success-50 text-success-700 rounded-2xl text-center text-sm font-medium w-8 px-0.5', column.className?.cellContent) }>
                              { tableItem?.[column.key as keyof typeof tableItem] }
                            </p>
                          </span>
                      </td>
                    )
                  default:
                    return (
                      <td key={ i + key + column.key } className={ clsx('py-5', column.className?.cell) }>
                        <p
                          className={ clsx('text-sm font-normal text-gray', column.className?.cellContent) }>
                          { tableItem?.[column.key as keyof typeof tableItem] }
                        </p>
                      </td>
                    )
                }
              }) }
          </tr>
        )) }
    </>
  )
}

