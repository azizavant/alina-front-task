import clsx from 'clsx'
import { ComponentPropsWithoutRef, ReactNode } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {
	children?: ReactNode
}

export const ContentHeader = ({ children, className }: Props) => {
	return (
		<div
			className={clsx(
				'flex bg-[#FFF] border-solid border-[1px] border-[#D0D5DD] rounded-t-lg items-center px-8 shadow-md',
				className,
			)}
		>
			{children}
		</div>
	)
}
