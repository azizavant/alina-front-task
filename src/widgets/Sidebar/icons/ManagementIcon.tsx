
export const ManagementIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
    return (
        <svg width="24" height="24" className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18 20V10M12 20V4M6 20V14" stroke={ color ?? '#667085' } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}