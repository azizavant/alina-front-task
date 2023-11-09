import React from 'react'
import { NumberCategorySettings } from '@/widgets/NumberCategorySettings'
import { RouteNavbar } from '@/shared/ui/RouteNavbar'

const NumberCategoriesAddEditPage = () => {

    return (
        <>
            <RouteNavbar/>
            <div className="text-3xl font-medium">
                Добавление (редактирование) гостиницы
            </div>
            <div className='mb-10'>
                <NumberCategorySettings/>
            </div>
        </>
    )
}

export default NumberCategoriesAddEditPage