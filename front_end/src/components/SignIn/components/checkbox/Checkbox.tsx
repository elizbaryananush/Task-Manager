import React, { FC, useState } from 'react'
import styles from './styles.module.scss'
import clsx from 'clsx'

import Tsipuk from '../../../../public/assets/icons/Vector.svg'
import Text from '../../../../componentsUI/Text'

interface IProp {
  text: string
}

const Checkbox: FC<IProp> = ({ text }) => {
    const [checked , setChecked] = useState<boolean>(false)

   const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <label className={clsx(styles.checkbox, checked && styles.checkboxActive)}>
      <div onClick={handleChange} className={clsx(styles.inputContainer, checked && styles.inputContainerChecked)}>
        {checked && <Tsipuk className={styles.tsipuk}/>}
      </div>
      <Text onclick={handleChange}>{text}</Text>
    </label>
  )
}

export default Checkbox
