import React, { useEffect, useLayoutEffect, useMemo, useRef, useState, } from 'react'
import { clsx } from 'clsx'
import cls from './DatePickerInput.module.scss'
import { getDateFromInputValue, getInputValueFromDate, isInRange } from '../../model/lib'
import { useLatest } from '../../model/hooks'

export interface DatePickerProps {
  value: Date;
  onChange: (value: Date) => void;
  setInputValueDate: (date: Date | undefined) => void
  min?: Date;
  max?: Date;
}

export const DatePickerInput = ({ value, onChange, min, max, setInputValueDate }: DatePickerProps) => {

  const [inputValue, setInputValue] = useState('')

  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    setInputValue(getInputValueFromDate(value))
  }, [value])

  const updateValueOnPopupCloseAction = (): void => {
    const date = getDateFromInputValue(inputValue)

    if (!date) {
      setInputValue(getInputValueFromDate(value))
      return
    }

    const isDateInRange: boolean = isInRange(date, min, max)

    if (!isDateInRange) {
      return
    }

    onChange(date)
  }

  const latestUpdateValueFromInput = useLatest(updateValueOnPopupCloseAction)

  useEffect(() => {
    const element = elementRef.current

    if (!element) return

    const onDocumentClick = (e: MouseEvent) => {
      const target = e.target
      if (!(target instanceof Node)) {
        return
      }

      if (element.contains(target)) {
        return
      }
      latestUpdateValueFromInput.current()
    }

    document.addEventListener('click', onDocumentClick)

    return () => {
      document.removeEventListener('click', onDocumentClick)
    }
  }, [latestUpdateValueFromInput])

  const onInputValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value.trim())
  }

  const [inputValueDate, isValidInputValue] = useMemo(() => {
    const date = getDateFromInputValue(inputValue)

    if (!date) {
      return [undefined, false]
    }

    const isDateInRange = isInRange(date, min, max)
    return [date, isDateInRange]
  }, [inputValue, min, max])

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key !== 'Enter') {
      return
    }

    updateValueOnPopupCloseAction()
  }

  useEffect((): void => {
    setInputValueDate(inputValueDate)
  }, [inputValue])

  return (
    <div ref={elementRef} className={cls.DatePicker}>
      <input
        className={clsx(
          cls.DatePicker__input,
          !isValidInputValue && cls.DatePicker__inputInvalid
        )}
        value={inputValue}
        onChange={onInputValueChange}
        type="text"
        onKeyDown={onKeyDown}
      />

    </div>
  )
}








