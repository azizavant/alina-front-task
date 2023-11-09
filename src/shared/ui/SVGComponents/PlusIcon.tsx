
export const PlusIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
    return (
      <svg className={className} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M6.99935 1.16667V12.8333M1.16602 7H12.8327" stroke={color ?? '#6172F3'} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
}