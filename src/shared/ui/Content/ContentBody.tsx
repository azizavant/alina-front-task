import clsx from 'clsx'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {
	children: ReactNode
}

export const ContentBody = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				'bg-[#FFF] border-solid border-[1px] border-[#D0D5DD] border-t-0 rounded-b-lg py-8 px-8 sm:px-6 xs:px-3 shadow-md',
				className,
			)}
		>
			{children}
		</div>
	)
}
