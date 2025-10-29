'use client'

import React, { forwardRef, InputHTMLAttributes, useState } from 'react'
import Text from '../Text'

import styles from './index.module.scss'
import clsx from 'clsx'

import Eye from '../../public/icons/eye.svg'

interface IProp {
  type: 'text' | 'number' | 'email'
  password?: boolean
  label: string
  id: string
  error?: string
  value: unknown
}

const Input = forwardRef<
  HTMLInputElement,
  IProp & InputHTMLAttributes<HTMLInputElement>
>(({ type, label, id, value, error, onChange, password = false, ...rest }, ref) => {
  const [focused, setFocused] = useState<boolean | undefined>(false)
  const [isPasswordType, setIsPasswordType] = useState<boolean>(password)

  return (
    <div>
      <div
        className={clsx(
          styles.InputBox,
          (focused || value) && styles.InputBoxActive,
          error && styles.InputBoxWrong
        )}
      >
        {((!focused && !value) || focused || error) && (
          <label
            htmlFor={id}
            className={clsx(
              styles.label,
              (focused || value) && styles.labelActive,
              error && styles.labelWrong
            )}
          >
            <div>
              <Text>{label}</Text>
            </div>
          </label>
        )}
        <input
          id={id}
          name={id}
          type={type}
          ref={ref}
          value={value}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          onChange={onChange}
          {...rest}
        />
        {password && <Eye className={styles.svg}/>}
      </div>
      {error && <Text classname={styles.errorText}>{error}</Text>}
    </div>
  )
})

Input.displayName = 'Input'

export default Input
