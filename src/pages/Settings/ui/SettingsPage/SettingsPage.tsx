import React from 'react'
import { BasicInformation } from '@/widgets/SettingsBasicInformation'
import { BankRequisites } from '@/widgets/SettingsBankRequisites'
import { NavBarTabsWithContent } from '@/shared/ui/NavBar'
import { Tab } from '@headlessui/react'
import { SettingsContacts } from '@/widgets/SettingsContacts/ui/SettingsContacts'
import { settingsNavbarList } from '@/pages/Settings/static'
import { RouteNavbar } from '@/shared/ui/RouteNavbar'


const SettingsPage: React.FC = () => {

  return (
    <>
      <RouteNavbar/>
      <div className="text-3xl font-medium">Общие настройки</div>
      <NavBarTabsWithContent placeTabs={settingsNavbarList}>
        <Tab.Panel>
          <BasicInformation/>
        </Tab.Panel>
        <Tab.Panel>
          <BankRequisites/>
        </Tab.Panel>
        <Tab.Panel>
          <SettingsContacts/>
        </Tab.Panel>
      </NavBarTabsWithContent>
    </>
  )
}

export default SettingsPage

