import clsx from 'clsx'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  isActive: boolean
}

export const NavBarTab = ({ children, isActive }: Props) => {
  return (
    <div className={clsx(isActive ? 'bg-blue' : 'bg-border-gray', 'whitespace-nowrap pb-1')}>
      <span className="bg-[#fcfcfd] pb-4 px-2 block py-6">
        <span
          className={
            clsx(
              isActive
              ? 'bg-blue text-transparent bg-clip-text'
              : 'text-gray', 'text-base'
            )
          }
        >
          {children}
        </span>
      </span>
    </div>
  )
}
