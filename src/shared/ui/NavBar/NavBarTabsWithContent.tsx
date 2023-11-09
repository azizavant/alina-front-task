import { ReactNode } from 'react'
import { useNavigate, useSearch } from '@tanstack/react-location'
import { Container } from '@/shared/ui/Container'
import { Tab } from '@headlessui/react'
import { NavBarTab } from '@/shared/ui/NavBar/NavBarTab'
import s from '@/shared/ui/NavBar/NavBar.module.scss'
import clsx from 'clsx'
import { NavBarPlaceTabs } from '@/shared/types'

interface NavBarProps {
  placeTabs: NavBarPlaceTabs[]
  children: ReactNode
}

export const NavBarTabsWithContent = ({ children, placeTabs }: NavBarProps) => {
  const { tab_id } = useSearch()
  const navigate = useNavigate()

  const onChange = (index: number) => {
    navigate({
      search: (prev) => ({
        ...prev,
        tab_id: index
      })
    })
  }

  return (
    <nav className="mb-10">
      <Tab.Group
        defaultIndex={0}
        selectedIndex={Number(tab_id)}
        onChange={onChange}
      >
        <Tab.List
          className={clsx(s.scrollbar, 'flex flex-row flex-nowrap text-[#5E5E5E] font-medium text-lg md:overflow-x-auto sm:text-base')}>
          {placeTabs.map((item) => (
            <Tab key={item.id} className={'outline-none'}>
              {({ selected }) => (
                <NavBarTab isActive={selected}>
                  {item.title}
                </NavBarTab>
              )}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          <Container>
            {children}
          </Container>
        </Tab.Panels>
      </Tab.Group>
    </nav>
  )
}
