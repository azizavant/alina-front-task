import React from 'react'
import clsx from 'clsx'

export const ExclamationMarkSVG = ({ className, positionCenter }: { className?: string; positionCenter?: () => boolean}) => {
    return (
        <span className={ clsx(positionCenter && positionCenter() ? 'items-center !mt-0' : '','h-10 w-12 flex justify-center mt-1') }>
            <svg className={ className } width="18" height="18" viewBox="0 0 12 12" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M6 4V6M6 8H6.005M11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z"
                   stroke="#6172F3" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </span>
    )
}