import { type ComponentPropsWithoutRef, type ReactNode } from 'react'

interface Props extends ComponentPropsWithoutRef<'div'> {
  children: ReactNode
}
export const Container = ({ children, className, ...rest }: Props) => (
  <div className={className} {...rest}>
    {children}
  </div>
)
