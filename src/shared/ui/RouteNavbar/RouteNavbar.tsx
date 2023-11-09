import { Link, useLocation } from '@tanstack/react-location'
import { BagIcon as HotelSettings } from '@/widgets/Sidebar/icons/BagIcon'
import { ManagementIcon as HotelManagement } from '@/widgets/Sidebar/icons/ManagementIcon'
import { EventIcon as EventSettings } from '@/widgets/Sidebar/icons/EventIcon'
import { CheckMarkIcon as EventManagement } from '@/widgets/Sidebar/icons/CheckMarkIcon'
import {
  eventManagement,
  eventSettings,
  hotelManagement,
  hotelSettings,
  routeTitlesNavbar,
  settings
} from '@/shared/ui/RouteNavbar/static'
import { SettingsIcon } from '@/widgets/Sidebar/icons/SettingsIcon'
import clsx from 'clsx'
import { EntityType } from '@/shared/ui/RouteNavbar/types/types'

const entityIcons = {
  [hotelSettings]: <HotelSettings className={'w-[18px] h-[18px]'}/>,
  [hotelManagement]: <HotelManagement className={'w-[18px] h-[18px]'}/>,
  [eventSettings]: <EventSettings className={'w-[18px] h-[18px]'}/>,
  [eventManagement]: <EventManagement className={'w-[18px] h-[18px]'}/>,
  [settings]: <SettingsIcon className={'w-[18px] h-[18px]'}/>
}


export const RouteNavbar = () => {

  const { current: { search: { tab_id }, href, pathname } } = useLocation()

  const routeTitle = routeTitlesNavbar[pathname]
  const getEntityIcon = (key: EntityType) => {
    return entityIcons[key]
  }

  const getTitle = (index: number, title: string | string[]) => {
    if (index === 0 && typeof title === 'string') {
      return (
        <div className="flex flex-row gap-1.5">
          {getEntityIcon(title as EntityType)}
          {title}
        </div>)
    }

    if (index === 1 && title === 'empty') return null

    if (index === 1 && !(title === 'empty')) return title[1]

    if (index === 2) {
      if (title.length === 1) return title[0]
      return title[tab_id as number ?? 0]
    }

    if (index === 3) {
      return title[0]
    }
  }

  const getUrl = (index: number, title: string | string[]) => {
    if (index === 0) return '/'

    if (index === 1 && title === 'empty') return '/'

    if (index === 1 && !(title === 'empty')) return title[0]

    if (index === 2 || index === 3) return href

    return null
  }

  if (!routeTitle) return <p>there's nothing here</p>

  return (
    <div className={ routeTitle.length ? 'flex flex-row mb-6' : '' }>
      {
        routeTitle.map((title, index) => {
          return (
            getTitle(index, title) === null
              ? null
              : (
                <div key={ index } className="flex-row flex items-center gap-2 mr-2 group">
                  <Link
                    to={ getUrl(index, title) }
                    className={ clsx('text-gray text-sm font-medium group-last:text-blue group-last:font-semibold') }
                  >
                    {
                      getTitle(index, title)
                    }
                  </Link>

                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={ 2 }
                       stroke="#676E76"
                       className={ clsx('w-4 h-4 group-last:hidden') }>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5"/>
                  </svg>
                </div>
              )
          )
        })
      }
    </div>
  )
}