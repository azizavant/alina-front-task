export const EditIcon = ({className, color}: {className?: string | undefined, color?: string | undefined}) => {
  return (
    <svg className={className} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_5329_27091)">
        <path d="M14.166 2.49999C14.3849 2.28112 14.6447 2.1075 14.9307 1.98905C15.2167 1.8706 15.5232 1.80963 15.8327 1.80963C16.1422 1.80963 16.4487 1.8706 16.7347 1.98905C17.0206 2.1075 17.2805 2.28112 17.4993 2.49999C17.7182 2.71886 17.8918 2.97869 18.0103 3.26466C18.1287 3.55063 18.1897 3.85713 18.1897 4.16665C18.1897 4.47618 18.1287 4.78268 18.0103 5.06865C17.8918 5.35461 17.7182 5.61445 17.4993 5.83332L6.24935 17.0833L1.66602 18.3333L2.91602 13.75L14.166 2.49999Z"
              stroke={color ?? '#667085'}
              strokeWidth="1.66667"
              strokeLinecap="round"
              strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_5329_27091">
          <rect width="20" height="20" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

