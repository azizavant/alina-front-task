import React, { Children, FC, ReactNode, useState } from 'react'
import { TableColumns } from '../TableColumns/TableColumns'
import {
  EventOrdersDataType,
  HotelsType,
  ListOfEventsDataType,
  NumberCategoriesType, PaidOptionsDataType, ScheduleDataType,
  TableColumnsType,
  TariffsType
} from '@/features/Table/model/types'
import clsx from 'clsx'
import { TableTitle, TableTitleProps } from '../TableTitle/TableTitle'
import { TablePagination, TablePaginationProps } from '../TablePagination/TablePagination'

interface TableProps {
  tableColumns: TableColumnsType[]
  mockData: NumberCategoriesType[] | HotelsType[] | TariffsType[] | ListOfEventsDataType[]
    | ScheduleDataType[] | PaidOptionsDataType[] | EventOrdersDataType[]
  children?: ReactNode
  className?: string
  withPagination?: boolean
  withTitle?: boolean
}

type TableType = FC<TableProps> & { Title: FC<TableTitleProps> } & { Pagination: FC<TablePaginationProps>}


export const Table: TableType = ({
                                   tableColumns,
                                   mockData,
                                   className,
                                   withPagination,
                                   withTitle,
                                   children
                                 }) => {

  const [checked, setChecked] = useState(false)

  const childrenArray = Children.toArray(children)
  const greaterThanOne = Children.count(childrenArray) > 1

  return (
    <div className={ clsx('flex flex-col shadow-xl border border-lightgray rounded-lg', className) }>
      {
        withTitle
          ? childrenArray[0]
          : null
      }
      <table>
        <thead>
        <tr className="rounded-lg border-solid border-1 border-lightgray">
          {
            tableColumns.map(({ title, className, id }) => (
                <th key={ id } className={ clsx(!withTitle && 'first:rounded-tl-lg last:rounded-tr-lg', 'py-4 last:pr-3', className?.cell) }>
                  <p className={ clsx('text-xs font-medium !text-gray rounded-lg', className?.cellContent) }>
                    { title }
                  </p>
                </th>
              ))
          }
        </tr>
        </thead>
        <tbody className={ clsx(!withPagination && 'first:[&>tr>td]:rounded-bl-lg last:[&>tr>td]:rounded-br-lg last:[&>tr]:border-b-0') }>
        <TableColumns tableColumns={ tableColumns } mockData={ mockData } />
        </tbody>
      </table>
      {
        withPagination && greaterThanOne
          ? childrenArray[1]
          : withPagination
            ? childrenArray[0]
            : null
      }
    </div>
  )
}

Table.Title = TableTitle
Table.Pagination = TablePagination
