
export const CheckMarkIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
    return (
        <svg width="21" height="20" className={className} viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 9L10 12L20 2M19 10V17C19 17.5304 18.7893 18.0391 18.4142 18.4142C18.0391 18.7893 17.5304 19 17 19H3C2.46957 19 1.96086 18.7893 1.58579 18.4142C1.21071 18.0391 1 17.5304 1 17V3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H14"
                  stroke={ color ?? '#667085' } strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
    )
}