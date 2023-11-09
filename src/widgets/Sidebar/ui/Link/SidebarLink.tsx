import React, { type ReactNode } from 'react'
import clsx from 'clsx'
import cls from '../Sidebar/Sidebar.module.scss'
import { SubCategory } from '@/widgets/Sidebar/model/types'
import { useNavigate } from '@tanstack/react-location'

export interface SidebarLinkProps {
  id: number
  onClick: (id: number) => void
  collapsed: boolean
  icon: ReactNode
  className: string
  text: string
  textStyle: string
  state: boolean
  arrow: ReactNode
  oppositeArrow: ReactNode
  list: SubCategory[]
  pathname: string
}

export const SidebarLink: React.FC<SidebarLinkProps> = (props) => {

  const {
    onClick,
    collapsed,
    icon,
    textStyle,
    text,
    arrow,
    oppositeArrow,
    className,
    state,
    list,
    pathname,
    id
  } = props

  const navigate = useNavigate()

  return (
    <div>
      <div
        className={clsx(className, cls.noSelect)}
        onClick={() => onClick(id)}
      >
        {icon}
        {
          collapsed &&
          <>
            <span className={textStyle}>{text}</span>
            {state ? arrow : oppositeArrow}
          </>
        }
      </div>
      <div className={clsx('text-left text-base font-medium mt-1', !state && 'hidden')}>
        {list.map(l =>
          <React.Fragment key={l.id}>
            <h1
              className={clsx('cursor-pointer px-3 py-2 pl-12 hover:bg-[#EEF4FF] hover:text-[#3538CD] rounded-md mt-1',
                l.route === pathname && 'bg-[#EEF4FF] text-[#3538CD]'
              )}
              onClick={() => navigate({ to: l.route })}
            >
              {l.title}
            </h1>
          </React.Fragment>
        )}
      </div>
    </div>
  )
}
