import React, { ChangeEvent, ReactNode, useEffect, useRef, useState } from 'react'
import { Icon } from '@/shared/ui/MultiSelect/icons/Icon'
import { CloseIcon } from '@/shared/ui/MultiSelect/icons/CloseIcon'
import clsx from 'clsx'
import TickIcon from '@/shared/assets/icons/TickIcon.svg'

interface Options {
  id: string
  value: string
  icon?: string | ReactNode
}

interface SelectProps<T extends boolean = false>{
  options: Options[]
  placeHolder?: string
  isMulti?: T
  isSearchable?: boolean
  onChange: (value: (T extends true ? Options[] : Options) | null) => void
  defaultSelectedValue?: string
  error?: undefined | string
  outerClassName?: string
  innerClassName?: string
  label?: string
  classNameLabel?: string
}

export function MultiSelect<T extends boolean = false>({
                                 placeHolder,
                                 options,
                                 isMulti,
                                 isSearchable,
                                 onChange,
                                 defaultSelectedValue,
                                 error,
                                 outerClassName,
                                 innerClassName,
                                 label,
                                 classNameLabel
                               }: SelectProps<T>) {

  const [showMenu, setShowMenu] = useState(false)
  const [selectedValue, setSelectedValue] = useState<Options | Options[] | null>(isMulti ? [] : null)
  const [searchValue, setSearchValue] = useState('')
  const searchRef = useRef<any>()
  const inputRef = useRef<any>()

  useEffect(() => {
    setSearchValue('')
    if (showMenu && searchRef.current) {
      searchRef.current.focus()
    }
  }, [showMenu])

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (inputRef.current && !inputRef.current.contains(e.target)) {
        setShowMenu(false)
      }
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [inputRef])

  const handleInputClick = () => {
    setShowMenu(!showMenu)
  }

  const getDisplay = () => {
    if (defaultSelectedValue && (Array.isArray(selectedValue) && !selectedValue.length || !selectedValue)) {
      const foundValue = options.find(item => item.value === defaultSelectedValue)
      if (foundValue) {
        setSelectedValue(isMulti ? [foundValue] : foundValue)
        onChange(isMulti ? [foundValue] : foundValue as any)
      }
    }

    if (!selectedValue || Array.isArray(selectedValue) && selectedValue.length === 0 || Object.keys(selectedValue).length === 0) {
      onChange(selectedValue as any)
      return placeHolder
    }
    if (defaultSelectedValue && !isMulti && selectedValue) {
      if (!!selectedValue && 'value' in selectedValue) return selectedValue.value
    }
    if (isMulti && Array.isArray(selectedValue)) {
      return (
        <div className="flex flex-wrap gap-[5px]">
          { selectedValue.map((option) => (
            <div key={ option.id } className="bg-royalblue text-white flex items-center px-1 py-0.5 rounded-md">
              { option.value }
              <span
                onClick={ (e) => onTagRemove(e, option) }
                className="flex items-center"
              >
                   <CloseIcon/>
               </span>
            </div>
          )) }
        </div>
      )
    }
    return 'value' in selectedValue ? selectedValue.value : null
  }

  const removeOption = (option: Options) => {
    if (Array.isArray(selectedValue)) return selectedValue.filter((o) => o.id !== option.id)
    return null
  }

  const onTagRemove = (e: React.MouseEvent<HTMLSpanElement, MouseEvent>, option: Options) => {
    e.stopPropagation()
    const newValue = removeOption(option)
    setSelectedValue(newValue)
    onChange(newValue as any)
  }

  const onItemClick = (option: Options) => {
    let newValue
    if (isMulti && Array.isArray(selectedValue)) {
      if (selectedValue.findIndex((o) => o.id === option.id) >= 0) {
        newValue = removeOption(option)
      } else {
        newValue = [...selectedValue, option]
      }
    } else {
      newValue = option
    }
    setSelectedValue(newValue)
    onChange(newValue as any)
  }

  const isSelected = (option: Options) => {
    if (isMulti && Array.isArray(selectedValue)) {
      return selectedValue.filter((o) => o.id === option.id).length > 0
    }

    if (!selectedValue) {
      return false
    }

    return 'id' in selectedValue ? selectedValue.id === option.id : null
  }

  const onSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }

  const getOptions = () => {
    if (!searchValue) {
      return options
    }

    return options.filter((option) => option.value.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0)
  }

  return (
    <div className={ clsx(outerClassName, 'w-8/12') }>
      { label && (
        <label className={ clsx('font-medium text-base mb-1 inline-block ml-1', classNameLabel) }>
          { label }
        </label>
      ) }
      <div className={ clsx(innerClassName, 'text-left relative w-full bg-[#F9FAFB] rounded-lg') }>
        <div ref={ inputRef } onClick={ handleInputClick }
             className={ clsx(showMenu && '!border-[#a4bcfd] !shadow-[0_0_0_4px_rgba(0,0,0,0.3)] !shadow-[#eef4ff]', 'flex border border-solid border-lightgray rounded-lg items-center justify-between select-none py-2 px-4') }
        >
          <div className="text-gray font-medium">{ getDisplay() }</div>
          <div className="dropdown-tools">
            <div className="dropdown-tool">
              <Icon/>
            </div>
          </div>
        </div>
        { showMenu && (
          <div
            className={ clsx('absolute rounded-lg shadow-lg z-10 bg-white w-full opacity-100 translate-y-2 ease-in-out') }>
            { isSearchable && (
              <div className="bg-[#fff] p-[5px]">
                <input
                  className="w-full box-border border p-[5px] rounded-[5px] border-solid border-[#ccc] outline-none"
                  onChange={ onSearch }
                  value={ searchValue }
                  ref={ searchRef }/>
              </div>
            ) }
            { getOptions().map((option) => (
              <div
                onClick={ () => onItemClick(option) }
                key={ option.id }
                className={ clsx(isSelected(option) && 'items-center bg-[#f5f8ff]',
                  'last:rounded-b-lg px-4 py-2 flex flex-row font-normal text-dark bg-white hover:bg-[#f5f8ff] transition-all cursor-pointer'
                ) }
              >
                { typeof option.icon === 'string'
                  ? (
                    <img
                      src={ option.icon } className="object-fit mr-2 flex items-center justify-start"
                      alt="Icon"
                      width={ 15 } height={ 15 }
                    />
                  )
                  : (
                    <span className="mr-2 flex items-center justify-start">{ option.icon }</span>
                  ) }
                <span className="w-full flex justify-between items-center">
                      { option.value }
                  { isSelected(option) && <TickIcon/> }
                </span>
              </div>
            )) }
          </div>
        ) }

      </div>
      { error
        ? (
          <span className="text-red font-medium text-sm ml-2 !bg-white">{ error }</span>
        )
        : (
          ''
        ) }
    </div>
  )
}

