import React from 'react'
import clsx from 'clsx'

interface CheckboxProps {
  isActive: boolean
  onChange: () => void
}

export const Checkbox = ({ isActive, onChange }: CheckboxProps) => {
  return (
    <div
      className={clsx(
        'w-5 h-5 rounded-full bg-white border-2 border-[#D0D5DD]',
        isActive && 'bg-[orange]'
      )}
      onClick={onChange}
    >

    </div>
  )
}
