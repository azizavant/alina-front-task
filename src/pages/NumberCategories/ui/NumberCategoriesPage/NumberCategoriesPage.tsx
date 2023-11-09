import React from 'react'
import { Table } from '@/features/Table'
import { mockNumberCategoryData, numbersTableColumns } from '@/features/Table/static'
import { PagesHeaderBlock } from '@/features/PagesHeaderBlock'
import { getNumberCategoriesRoutes } from '@/shared/static/router'
import { RouteNavbar } from '@/shared/ui/RouteNavbar'

const NumberCategoriesPage = () => {

  return (
    <div className="flex flex-col">
      <RouteNavbar/>
      <PagesHeaderBlock
        title={ 'Категории номеров' }
        buttonText={ 'Добавить категорию' }
        inputPlaceholder={ 'Поиск номеров' }
        description={ 'Можете добавлять, редактировать и удалять информацию о своих номерах' }
        buttonLink={ getNumberCategoriesRoutes.ADD_EDIT_NUMBER_CATEGORIES }
        buttonsStatus={ [
          { id: 1, title: 'Все' },
          { id: 2, title: 'Активные' },
          { id: 3, title: 'Неактивные' }
        ] }
      />

      <Table
        withTitle
        withPagination
        tableColumns={ numbersTableColumns }
        mockData={ mockNumberCategoryData }
      >
        <Table.Title tableTitle="Все категории"
                     totalNumber={ mockNumberCategoryData.length }
                     tableColumns={ numbersTableColumns }
        />
        <Table.Pagination/>
      </Table>
    </div>
  )
}

export default NumberCategoriesPage
