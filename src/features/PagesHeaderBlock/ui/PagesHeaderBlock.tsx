import React from 'react'
import { Button } from '@/shared/ui/Button/Button'
import PlusIcon from '@/features/Table/icons/PlusIcon.svg'
import { useMatch, useNavigate } from '@tanstack/react-location'
import { Input } from '@/shared/ui/Input'
import SearchIcon from '@/features/Table/icons/SearchIcon.svg'
import FilterIcon from '@/features/Table/icons/FilterIcon.svg'

interface PagesHeaderBlockPropsType {
  title: string
  description: string
  inputPlaceholder?: string
  buttonText?: string
  buttonLink: string
  buttonsStatus?: { id: number, title: string }[]
  filter?: boolean
}

export const PagesHeaderBlock = ({
                                   title,
                                   description,
                                   inputPlaceholder,
                                   buttonText,
                                   buttonLink,
                                   buttonsStatus,
                                   filter
                                 }: PagesHeaderBlockPropsType) => {

  const { pathname } = useMatch()
  const navigate = useNavigate()

  return (
    <>
      <div className="flex w-full justify-between mb-5">
        <div className="flex flex-col gap-1">
          <h1 className="text-3xl font-semibold text-dark">
            { title }
          </h1>
          <p className="flex text-gray text-md font-normal justify-center">
            { description }
          </p>
        </div>
        {
          buttonText && (
            <Button
              onClick={ () => navigate({ to: pathname + buttonLink }) }
              className="font-medium text-white pl-1 text-sm h-[40px] rounded-xl flex justify-between items-center gap-2 bg-royalblue">
              <PlusIcon/>
              { buttonText }
            </Button>
          )
        }
      </div>
      {
        buttonsStatus && (
          <div className="flex w-full mb-7">
            {
              buttonsStatus.map((button) => (
                <Button
                  className="!text-gray-700 font-medium h-11 px-3 border border-lightgray !rounded-none first:!rounded-l-lg first:!rounded-r-none last:!rounded-r-lg last:!rounded-l-none"
                  key={ button.id }>
                  { button.title }
                </Button>
              ))
            }
          </div>
        )
      }

      <div className='mb-7 flex w-full justify-between'>
        {
          inputPlaceholder && (
          <Input
          placeholder={ inputPlaceholder }
          className="w-[400px]"
          icon={ <SearchIcon/> }
          />
        ) }
        {
          filter && (
            <Button
              className="flex justify-center items-center gap-3.5 font-medium !text-gray-700 h-11 px-3 border border-[#D0D5DD] rounded-xl"
            >
              <FilterIcon/>
              Фильтр
            </Button>
          )
        }
      </div>
    </>
  )
}

