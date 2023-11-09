import React from 'react'
import clsx from 'clsx'

interface Props {
  type?: 'square' | 'round'
  checked: boolean
  onChange: (state: boolean) => void
  className?: string
  checkBoxClassName?: string
}

export const CheckboxSquare = ({ checked, onChange, type, className, checkBoxClassName}: Props) => {
  const isRound = type === 'round'
  return (
    <label className={className}>
      <input
        className="hidden"
        type="checkbox"
        onChange={() => {
          onChange(!checked)
        }}
      />
      <div
        className={clsx('w-4 h-4 rounded border flex items-center justify-center',
          checkBoxClassName,
          isRound && '!rounded-full',
          checked
            ? isRound
              ? '!bg-royalblue !border-royalblue'
              : '!bg-indigo-50 !border-royalblue'
            : 'border-lightgray')}>
        { checked
          ? <svg width={ isRound ? '10' : '12' }
                 height={ isRound ? '7' : '9' } viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.6673 1.5L4.25065 7.91667L1.33398 5"
                  stroke={
                    isRound
                      ? '#fff'
                      : '#444CE7' }
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"/>
          </svg>
          : null
        }
      </div>
    </label>
  )
}
