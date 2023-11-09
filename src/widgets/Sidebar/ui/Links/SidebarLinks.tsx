import React, { useState } from 'react'
import { ChevronDoubleLeftIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'
import {
  eventManagementList,
  eventSettingsList,
  hotelManagementList,
  hotelSettingsList,
  linksArray
} from '@/widgets/Sidebar/static'
import { SidebarLink } from '@/widgets/Sidebar/ui/Link/SidebarLink'
import { Container } from '@/shared/ui/Container'
import clsx from 'clsx'
import cls from '@/widgets/Sidebar/ui/Sidebar/Sidebar.module.scss'
import Logo from '@/widgets/Sidebar/icons/logo.svg'
import Support from '@/widgets/Sidebar/icons/support.svg'
import { useLocation, useNavigate } from '@tanstack/react-location'
import { BagIcon } from '@/widgets/Sidebar/icons/BagIcon'
import { ManagementIcon } from '@/widgets/Sidebar/icons/ManagementIcon'
import { EventIcon } from '@/widgets/Sidebar/icons/EventIcon'
import { CheckMarkIcon } from '@/widgets/Sidebar/icons/CheckMarkIcon'
import { SettingsIcon } from '@/widgets/Sidebar/icons/SettingsIcon'
import { Link } from '@/widgets/Sidebar/model/types'
import '@/shared/styles/shared.css'

interface LinksProps {
  collapsed: boolean
  setCollapsed: () => void
}

export const SidebarLinks: React.FC<LinksProps> = (props) => {

  const navigate = useNavigate()
  const { current: { pathname } } = useLocation()

  const { collapsed, setCollapsed } = props

  const [stateLinks, setStateLinks] = useState<Link[]>(linksArray)

  const onChangeLinks = (id: number) => {
    if (collapsed) {
      const newStateLinks = stateLinks.map(link => link.id === id ? { ...link, toggle: !link.toggle } : link)
      setStateLinks(newStateLinks)
    } else {
      setCollapsed()
    }
  }

  const onToggle = () => {
    const newStateLinks = stateLinks.map(link => ({ ...link, toggle: false }))
    setStateLinks(newStateLinks)
    setCollapsed()
  }

  const openBasicSettings = () => {
    navigate({ to: '/settings' })
    onToggle()
  }

  const sidebarLinks = [
    {
      id: 1,
      text: 'Настройки гостиниц',
      icon: <BagIcon color={hotelSettingsList.some(item => item.route === pathname) ? '#3538CD' : undefined}/>,
      className: 'p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate mt-1',
      textStyle: clsx('absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]',
        hotelSettingsList.some(item => item.route === pathname) && 'text-[#3538CD]'),
      state: stateLinks[0].toggle,
      arrow: <ChevronUpIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      oppositeArrow: <ChevronDownIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      list: hotelSettingsList
    },
    {
      id: 2,
      text: 'Управление гостиницей',
      icon: <ManagementIcon color={hotelManagementList.some(item => item.route === pathname) ? '#3538CD' : undefined}/>,
      className: 'p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate mt-1',
      textStyle: clsx('absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]',
        hotelManagementList.some(item => item.route === pathname) && 'text-[#3538CD]'),
      state: stateLinks[1].toggle,
      arrow: <ChevronUpIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      oppositeArrow: <ChevronDownIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      list: hotelManagementList
    },
    {
      id: 3,
      text: 'Настройки мероприятий',
      icon: <EventIcon color={eventSettingsList.some(item => item.route === pathname) ? '#3538CD' : undefined}/>,
      className: 'p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate mt-1',
      textStyle: clsx('absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]',
        eventSettingsList.some(item => item.route === pathname) && 'text-[#3538CD]'),
      state: stateLinks[2].toggle,
      arrow: <ChevronUpIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      oppositeArrow: <ChevronDownIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      list: eventSettingsList
    },
    {
      id: 4,
      text: 'Управление мероприятиями',
      icon: <CheckMarkIcon color={eventManagementList.some(item => item.route === pathname) ? '#3538CD' : undefined}/>,
      className: 'p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate mt-1',
      textStyle: clsx('absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]',
        eventManagementList.some(item => item.route === pathname) && 'text-[#3538CD]'),
      state: stateLinks[3].toggle,
      arrow: <ChevronUpIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      oppositeArrow: <ChevronDownIcon className="w-4 h-4 ml-2.5 absolute left-[280px] bottom-4"/>,
      list: eventManagementList
    }
  ]

  return (
    <React.Fragment>
      <Container className="mt-8">

        <div
          className='pl-6 pr-5 rounded-lg flex relative cursor-pointer truncate noSelect'
          onClick={onToggle}
        >
          <Logo/>
          {
            collapsed &&
            <>
              <span className="font-medium text-[22px] absolute left-[66px] truncate">MTour CRM</span>
              <ChevronDoubleLeftIcon className="w-4 h-4 ml-28 absolute left-[194px] bottom-1.5" color="#667085"/>
            </>
          }
        </div>

        <div className="mt-5 px-4">
          {sidebarLinks.map((link) => (
            <SidebarLink
              key={link.id}
              id={link.id}
              onClick={(id) => onChangeLinks(id)}
              collapsed={collapsed}
              icon={link.icon}
              className={link.className}
              text={link.text}
              textStyle={link.textStyle}
              state={link.state}
              arrow={link.arrow}
              oppositeArrow={link.oppositeArrow}
              list={link.list}
              pathname={pathname}
            />
          ))}
        </div>
      </Container>

      <Container className="px-4 mt-10">
        <div
          className="p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate"
          onClick={openBasicSettings}
        >
          <SettingsIcon color={pathname === '/settings' ? '#3538CD' : undefined}/>
          {
            collapsed &&
            <>
              <span className={clsx(
                'absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]',
                pathname === '/settings' ? 'text-[#3538CD]' : undefined
              )}>
                Общие настройки
              </span>
            </>
          }
        </div>

        <div
          className={clsx('p-3 rounded-lg flex relative duration-300 hover:bg-[#EEF4FF] cursor-pointer truncate mt-1', cls.noSelect)}
        >
          <Support/>
          {
            collapsed &&
            <>
              <span className="absolute left-[50px] bottom-3 text-base font-medium truncate text-[#344054]">Служба поддержки</span>
            </>
          }
        </div>
        <div className="border border-[#E4E7EC] mt-4 mb-6"></div>
        <div className="text-center">user</div>
      </Container>

    </React.Fragment>
  )
}

