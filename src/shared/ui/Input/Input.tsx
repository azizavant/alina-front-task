import { EyeIcon, EyeSlashIcon } from '@heroicons/react/24/solid'
import react, { type ComponentPropsWithoutRef, type ReactNode } from 'react'
import clsx from 'clsx'
import cls from './Input.module.scss'
import { classNames } from '@/shared/lib'

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  icon?: ReactNode | string
  label?: string
  placeholder?: string
  error?: any
  className?: string
  classNameLabel?: string
  classNameDivInput?: string
  showPassword?: boolean
  setShowPassword?: () => void
  hintAbsolute?: boolean
  hint?: string
}

export const Input = react.forwardRef<HTMLInputElement, InputProps>((InputProps, ref) => {

    const {
      className,
      classNameLabel,
      classNameDivInput,
      placeholder,
      label,
      icon,
      error,
      showPassword,
      type,
      hint,
      hintAbsolute,
      setShowPassword,
      ...otherProps
    } = InputProps

    const hintMods = {
      [cls.hintAbsolute]: hintAbsolute
    }

    return (
      <div className={ className }>
        { label && (
          <label className={ clsx('font-medium text-base mb-1 inline-block ml-1', classNameLabel) }>
            { label }
          </label>
        ) }
        <div className={ clsx('flex flex-row w-full relative', classNameDivInput) }>
          { !!icon &&
              <div className="absolute h-full flex items-center pl-4">
                { typeof icon === 'string'
                  ? (
                    <img src={ icon } alt="Icon" width={ 15 } height={ 15 }/>
                  )
                  : (
                    icon
                  ) }
              </div>
          }
          <input
            ref={ ref }
            type={ type }
            placeholder={ placeholder }
            { ...otherProps }
            className={ clsx(!icon && '!px-3', error && 'border-[#FDA29B] shadow-[0_0_0_4px_rgba(0,0,0,0.3)] shadow-[#FEF3F2]',
              'block font-medium border border-[#D0D5DD] p-2 pl-12 w-full self-center rounded-lg placeholder:text-gray outline-0 bg-[#F9FAFB] text-sm focus:border-[#a4bcfd] focus:shadow-[0_0_0_4px_rgba(0,0,0,0.3)] focus:shadow-[#eef4ff]') }
          />
          { showPassword != undefined && (
            <button
              type="button"
              className="absolute right-2.5 h-full flex items-center text-light-blue"
              onClick={ setShowPassword }
            >
              { showPassword
                ? (
                  <EyeIcon width={ 15 } height={ 15 }/>
                )
                : (
                  <EyeSlashIcon width={ 15 } height={ 15 }/>
                ) }
            </button>
          ) }
        </div>
        { error && <span className="text-red font-medium text-sm">{ error }</span> }
        { hint && <span className={ classNames(cls.hint, hintMods) }>{ hint }</span> }
      </div>
    )
  }
)
