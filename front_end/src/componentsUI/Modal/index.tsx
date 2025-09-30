import React, { FC, ReactNode } from 'react'
import Portal from '../Portal'
import styles from './index.module.scss'
import clsx from 'clsx'
import CursorGradient from '../CursorGradient'

interface IProp {
  children: ReactNode
  gradientBorder?: boolean
  gradientBackground?: boolean
}

const ModalWindow: FC<IProp> = ({
  children,
  gradientBorder,
  gradientBackground,
}) => {
  return (
    <Portal>
      <div
        className={clsx(
          styles.Modal,
          gradientBackground && styles.gradientBackgroundModal
        )}
      >
        <div
          className={clsx(
            styles.ModalBox,
            gradientBorder && styles.gradientModalBox
          )}
        >
          {!gradientBorder && children}
          {gradientBorder && <div className={styles.insideBox}>{children}</div>}
        </div>

        <div className={styles.gradientBackground}>
          {/* <CursorGradient /> */}
          <div className={styles.blur}></div>
        </div>
      </div>
    </Portal>
  )
}

export default ModalWindow
