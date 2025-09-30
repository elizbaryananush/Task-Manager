import React, { FC } from 'react'
import Input from '../../../componentsUI/Input'
import { useFormContext } from 'react-hook-form'
import { TRegisterData1 } from '../../../types/componentsTypes/registerData.type'
import styles from './index.module.scss'
import NumberInput from '../../../componentsUI/numberInput'

interface IProp {
  defaultValues: TRegisterData1
}

const RegisterFields: FC<IProp> = ({ defaultValues }) => {
  const numberArray = Array.from({ length: 6 }, () => '')
  // const { register, setValue, watch, trigger, formState: { errors } } = useFormContext<TRegisterData1>();

  return (
    <div className={styles.RegisterFields}>
      <></>
    </div>
  )
}

export default RegisterFields
