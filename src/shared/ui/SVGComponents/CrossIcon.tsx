
export const CrossIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
    return (
      <svg className={className} width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 1L1 7M1 1L7 7" stroke={color ?? '#667085'} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}