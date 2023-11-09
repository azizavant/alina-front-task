import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from '@/shared/lib'
import { SidebarLinks } from '@/widgets/Sidebar/ui/Links/SidebarLinks'

export const Sidebar = () => {

    const [collapsed, setCollapsed] = useState(false)

    return (
        <div className="border-r border-[#E4E7EC]">
            <div className={classNames(cls.Sidebar, { [cls.SidebarCollapsed]: collapsed }, [])}>
                <SidebarLinks collapsed={collapsed} setCollapsed={() => setCollapsed((prev) => !prev)}/>
            </div>
        </div>
    )
}
