import React, { ReactNode, useEffect, useRef, useState } from 'react'
import clsx from 'clsx'

interface DropdownProps {
  children: ReactNode
  targetItem: string | ReactNode
  targetItemClassName?: string
  headerTitle?: string
  headerClassName?: string
  className?: string
  isHover?: boolean
  activeTargetItemClassName?: string
}

export const Dropdown = ({
                           targetItem,
                           children,
                           headerTitle,
                           headerClassName,
                           className,
                           targetItemClassName,
                           activeTargetItemClassName,
                           isHover = false
                         }: DropdownProps) => {

  const [open, setOpen] = useState(false)
  const dropdownRef = useRef<any>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    window.addEventListener('click', handler)
    return () => {
      window.removeEventListener('click', handler)
    }
  }, [dropdownRef])


  return (
    <div ref={ dropdownRef } className="relative flex justify-center">
      <div
        className={ clsx(targetItemClassName, open && activeTargetItemClassName, 'object-cover border-gray-400 cursor-pointer flex justify-center items-center') }
        onClick={ () => setOpen(!open) }
        onMouseEnter={ () => {
          if (isHover) setOpen(true)
        } }
        onMouseLeave={ () => {
          if (isHover) setOpen(false)
        } }
      >
        { targetItem }
      </div>
      { open && (
        <div className={ clsx(className, 'bg-white shadow-xl z-10 absolute right-14 -top-4 rounded-xl') }>
          { headerTitle && (
            <>
              <div className={ clsx(headerClassName, 'py-3 px-4 text-sm font-medium text-gray-700') }>
                { headerTitle }
              </div>
              <hr className="text-borderGray"/>
            </>
          ) }
          <div>
            { children }
          </div>
        </div>
      ) }
    </div>
  )
}

// checkbox:
//       <div
//         className={clsx('py-2 px-4 first:pt-3 last:pb-3 text-sm text-gray-700 font-normal cursor-pointer hover:bg-[#EEF4FF] flex items-center gap-3', contentClassName)}
//         key={contentItem.id}
//       >
//         <CheckboxSquare
//           className='flex'
//           checked={'checked' in contentItem ? contentItem.checked! : false}
//           onChange={(prev) => {
//             if (onChangeHandler && entityId) {
//               onChangeHandler(entityId, contentItem.id, prev)
//             }
//           }}
//         />
//         {contentItem.title}
//       </div>

// default:
//       <div
//         className={clsx('py-2 px-4 first:pt-3 last:pb-3 text-sm text-gray-700 font-normal cursor-pointer hover:bg-[#EEF4FF] flex items-center gap-3', contentClassName)}
//         key={contentItem.id}
//       >
//         {contentItem.icon && contentItem.icon}
//         {contentItem.title}
//       </div>
//