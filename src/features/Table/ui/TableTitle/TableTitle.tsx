import React, { FC } from 'react'
import { Dropdown } from '@/shared/ui/Dropdown'
import EllipsisIcon from '@/features/Table/icons/EllipsisIcon.svg'
import clsx from 'clsx'
import { CheckboxSquare } from '@/shared/ui/Checkbox'
import { TableColumnsType } from '@/features/Table/model/types'

export interface TableTitleProps {
  tableTitle?: string
  totalNumber?: number
  tableColumns?: TableColumnsType[]
}

export const TableTitle: FC<TableTitleProps> = ({ tableTitle, totalNumber, tableColumns }) => {

  const controlTableColumnItems = tableColumns?.map(item => ({
    title: item.title,
    id: item.id,
    isIncluded: item.isIncluded
  }))

  return (
    <div
      className="flex justify-between items-center pl-7 pr-5 py-3 bg-white rounded-t-lg border-b border-lightgray">
      <div className="flex items-center gap-3">
        <h1 className="text-lg font-medium">
          { tableTitle }
        </h1>
        { totalNumber && (
          <p className="bg-[#F2F4F7] rounded-xl text-xs font-medium text-blue py-1 px-3">
            { totalNumber }
          </p>
        ) }
      </div>
      {
        tableColumns && (
          <Dropdown className="!w-56"
                    targetItem={ <EllipsisIcon/> }
                    headerTitle={ 'Отображение столбцов' }
          >
            {
              controlTableColumnItems?.map(column => (
                <div
                  className={ clsx('py-2 px-4 first:pt-3 last:pb-3 text-sm text-gray-700 font-normal cursor-pointer flex items-center gap-3') }
                  key={ column.id }
                >
                  <CheckboxSquare
                    className="flex"
                    checked={ column.isIncluded }
                    onChange={ (prev) => {
                      // TODO:
                      // }
                      //   const foundItem = controlTableColumnItems.find(item => item.id === column.id)
                      //   if (foundItem) {
                      //     console.log(foundItem)
                      //     foundItem.isIncluded = prev
                      //   }
                      //   const newTableColumns = tableColumnss.filter(item => item.id !== column.id)
                      //   setTableColumnss(newTableColumns)
                      //   console.log(prev)
                    } }
                  />
                  { column.title }
                </div>
              ))
            }
          </Dropdown>
        )
      }
    </div>
  )
}