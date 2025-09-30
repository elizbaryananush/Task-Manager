import React, { ButtonHTMLAttributes, FC, ReactNode } from 'react'
import styles from './index.module.scss'
import { TButtonTheme } from '../../types/componentsTypes/buttonTheme.type'
import clsx from 'clsx'
import Text from '../Text'

interface IProp {
  children: ReactNode
  disabled?: boolean
  buttontype?: TButtonTheme
  icon?: ReactNode
}

const Button: FC<IProp & ButtonHTMLAttributes<HTMLButtonElement>> = ({
  children,
  disabled = false,
  buttontype = 'primary',
  icon,
  ...rest
}) => {
  switch (buttontype) {
    case 'primary':
      return (
        <button
          disabled={disabled}
          className={clsx(
            styles.Button,
            styles.primary,
            icon && styles.buttonWithIcon
          )}
          {...rest}
        >
          {children}
        </button>
      )
      break

    case 'secondary':
      return (
        <button
          disabled={disabled}
          className={clsx(
            styles.Button,
            icon && styles.buttonWithIcon,
            styles.secondary
          )}
        >
          {icon && icon}
          <Text>{children}</Text>
        </button>
      )
      break
    default:
      break
  }
}

export default Button
