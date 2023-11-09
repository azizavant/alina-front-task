import React from 'react'
import ReactPaginate from 'react-paginate'
import cls from './Pagination.module.scss'
import {classNames} from '@/shared/lib'


export const Pagination = () => {
  return (
    <ReactPaginate
      className={classNames(cls.root)}
      breakLabel="..."
      nextLabel="Следующий ->"
      onPageChange={event => {
      }}
      pageRangeDisplayed={3}
      pageCount={10}
      previousLabel="<- Предыдущий"
      renderOnZeroPageCount={null}
    />
  )
}

