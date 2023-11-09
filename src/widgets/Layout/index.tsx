import React, { ReactNode } from 'react'
import { Sidebar } from '@/widgets/Sidebar'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <div className="flex">
            <Sidebar/>
            <div className="flex-1 p-8 bg-[#fcfcfd]">
                {children}
            </div>
        </div>
    )
}
