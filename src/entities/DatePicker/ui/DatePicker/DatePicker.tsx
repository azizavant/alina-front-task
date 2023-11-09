import React, { MouseEventHandler, useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react'
import {
  DateCellItem,
  daysOfTheWeek,
  getCurrentMothDays,
  getDaysAmountInAMonth,
  getNextMonthDays,
  getPreviousMonthDays,
  isInRange,
  isToday,
  months
} from '../../model/lib'
import { clsx } from 'clsx'
import cls from './DatePicker.module.scss'
import { translateDayToRussian, translateMonthToRussian } from '@/shared/utils/utils'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid'
import { DatePickerInput } from '@/entities/DatePicker/ui/DatePickerInput/DatePickerInput'
import { Button } from '@/shared/ui/Button'
import moment from 'moment/moment'

interface DatePickerPopupContentProps {
  selectedValue: Date;
  min?: Date;
  max?: Date;
  onChange: (date: Date) => void;
  setNewDate: (item: DateCellItem) => void
}

export const DatePicker: React.FC<DatePickerPopupContentProps> = (props) => {

  const {
    selectedValue,
    onChange,
    min,
    max,
    setNewDate
  } = props

  const [panelYear, setPanelYear] = useState(() => selectedValue.getFullYear())
  const [panelMonth, setPanelMonth] = useState(() => selectedValue.getMonth())
  const [inputValueDate, setInputValueDate] = useState<Date | undefined>(undefined)
  const todayDate: Date = useMemo(() => new Date(), [])



  const currentMonth: string = translateMonthToRussian(months[panelMonth])

  const elementRef = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    if (!inputValueDate) return

    setPanelMonth(inputValueDate.getMonth())
    setPanelYear(inputValueDate.getFullYear())
  }, [inputValueDate])


  const [year, month, day] = useMemo(() => {
    const currentYear = selectedValue.getFullYear()
    const currentDay = selectedValue.getDate()
    const currentMonth = selectedValue.getMonth()

    return [currentYear, currentMonth, currentDay]
  }, [selectedValue])

  const dateCells: DateCellItem[] = useMemo(() => {
    const daysInAMonth = getDaysAmountInAMonth(panelYear, panelMonth)

    const currentMonthDays = getCurrentMothDays(
      panelYear,
      panelMonth,
      daysInAMonth
    )
    const prevMonthDays = getPreviousMonthDays(panelYear, panelMonth)
    const nextMonthDays = getNextMonthDays(panelYear, panelMonth)

    return [...prevMonthDays, ...currentMonthDays, ...nextMonthDays]
  }, [panelYear, panelMonth])

  const onDateSelect = (item: DateCellItem) => {
    onChange(new Date(item.year, item.month, item.date))
    setNewDate(item)
  }

  const nextMonth = () => {
    if (panelMonth === 11) {
      setPanelMonth(0)
      setPanelYear(panelYear + 1)
    } else {
      setPanelMonth(panelMonth + 1)
    }
  }

  const prevMonth = () => {
    if (panelMonth === 0) {
      setPanelMonth(11)
      setPanelYear(panelYear - 1)
    } else {
      setPanelMonth(panelMonth - 1)
    }
  }

  return (
    <div ref={elementRef} className={cls.CalendarPanel}>
      <div>
        <div
          className={cls.CalendarPanel__date}
        >
          <div className="p-2.5 hover:cursor-pointer" onClick={prevMonth}>
            <ChevronLeftIcon width={20} height={20}/>
          </div>
          <div>{currentMonth} {panelYear}</div>
          <div className="p-2.5 hover:cursor-pointer" onClick={nextMonth}>
            <ChevronRightIcon width={20} height={20}/>
          </div>
        </div>
        <div className={cls.CalendarPanel__buttons}>
          <DatePickerInput
            value={selectedValue}
            onChange={onChange}
            setInputValueDate={(date: Date | undefined) => setInputValueDate(date)}
          />
          <button
            onClick={() => onChange(new Date())}
            className="border border-[#D0D5DD] rounded-lg px-4 text-sm font-medium text-[#344054] flex items-center"
          >
            Сегодня
          </button>
        </div>
      </div>
      <div className={cls.CalendarPanel__content}>
        {daysOfTheWeek.map(weekDay => (
          <div key={weekDay} className={cls.CalendarPanelItem}>
            {translateDayToRussian(weekDay, true)}
          </div>
        ))}
        {dateCells.map(cell => {
          const isSelectedDate: boolean = cell.year === year && cell.month === month && cell.date === day
          const isTodayDate: boolean = isToday(cell, todayDate)
          const isNotCurrent: boolean = cell.type !== 'current'

          const isDateInRange: boolean = isInRange(
            new Date(cell.year, cell.month, cell.date),
            min,
            max
          )

          return (
            <div
              className={clsx(
                cls.CalendarPanelItem,
                isSelectedDate && cls.CalendarPanelItemSelected,
                isTodayDate && cls.CalendarPanelItemToday,
                isNotCurrent && cls.CalendarPanelItemNotCurrent,
                !isDateInRange && cls.CalendarPanelItemNotInRange
              )}
              key={`${cell.date}-${cell.month}-${cell.year}`}
              onClick={() => isDateInRange && onDateSelect(cell)}
            >
              <div className={cls.CalendarPanelItem__date}>{cell.date}</div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
