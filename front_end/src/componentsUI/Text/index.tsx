import React, { FC, ReactNode } from 'react'
import styles from './index.module.scss'
import clsx from 'clsx'

interface IProp {
  children: ReactNode
  onclick?: () => void
  classname?: string
  fontSize?: number
}

const Text: FC<IProp> = ({ children, onclick, classname, fontSize }) => {
  return (
    <p
      style={{ fontSize: fontSize + 'px' }}
      onClick={onclick}
      className={clsx(styles.Text, classname)}
    >
      {children}
    </p>
  )
}

export default Text
