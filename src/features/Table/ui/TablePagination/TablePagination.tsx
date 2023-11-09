import React, { FC } from 'react'
import ReactPaginate from 'react-paginate'
import { classNames } from '@/shared/lib'
import cls from './TablePagination.module.scss'

export interface TablePaginationProps {
  className?: string
  pageCount?: number
}

export const TablePagination: FC<TablePaginationProps> = ({ className = '', pageCount = 10 }) => {

  return (
    <ReactPaginate
      className={ classNames(cls.root, {}, [className]) }
      breakLabel="..."
      nextLabel="Следующий ->"
      onPageChange={ event => {
      } }
      pageRangeDisplayed={ 3 }
      pageCount={ pageCount }
      previousLabel="<- Предыдущий"
      renderOnZeroPageCount={ null }
    />
  )
}
