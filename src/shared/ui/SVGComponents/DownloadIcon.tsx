export const DownloadIcon = ({ className, color }: { className?: string | undefined, color?: string | undefined }) => {
  return (
    <svg className={ className } width="14" height="14" viewBox="0 0 14 14" fill="none"
         xmlns="http://www.w3.org/2000/svg">
      <path
        d="M13 9V9.8C13 10.9201 13 11.4802 12.782 11.908C12.5903 12.2843 12.2843 12.5903 11.908 12.782C11.4802 13 10.9201 13 9.8 13H4.2C3.07989 13 2.51984 13 2.09202 12.782C1.71569 12.5903 1.40973 12.2843 1.21799 11.908C1 11.4802 1 10.9201 1 9.8V9M10.3333 5.66667L7 9M7 9L3.66667 5.66667M7 9V1"
        stroke={color ?? '#344054'} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

