'use client'

import React, {
  forwardRef,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'

import styles from './index.module.scss'

interface IProp {
  activeInputIndex: number
}

const NumberInput = forwardRef<
  HTMLInputElement,
  IProp & InputHTMLAttributes<HTMLInputElement>
>(
  (
    {
      value,
      activeInputIndex,
      onChange,
      id,
      tabIndex,
      ...rest
      // type, label, id, value, error, onChange, ...rest
    },
    ref
  ) => {
    const [focused, setFocused] = useState<boolean>(
      tabIndex === activeInputIndex
    )
    useEffect(() => {
      setFocused(activeInputIndex === tabIndex)
    }, [activeInputIndex])
    return (
      <input
        className={styles.Input}
        type="number"
        id={id}
        ref={ref}
        // value={value}
        onChange={onChange}
        tabIndex={tabIndex}
        maxLength={1}
        {...rest}
      />
    )
  }
)

NumberInput.displayName = 'Input'

export default NumberInput
