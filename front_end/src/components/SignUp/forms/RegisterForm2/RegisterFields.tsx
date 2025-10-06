import React, { FC } from 'react'
import Input from '../../../../componentsUI/Input'
import { useFormContext } from 'react-hook-form'
import { TRegisterData2 } from '../../../../types/componentsTypes/registerData.type'
import styles from './index.module.scss'
import { useSecondStepData } from '../../../../store/features/register/hooks'

interface IProp {
    defaultValues : TRegisterData2
}

const RegisterFields:FC<IProp> = ({
    defaultValues
}) => {
  const { register, setValue, watch, trigger, formState: { errors } } = useFormContext<TRegisterData2>();
  const { setField, ...secondStep } = useSecondStepData()

  return (
    <div className={styles.RegisterFields}>
      <Input
        type="text"
        id="email"
        label="email address"
        error={errors.email?.message}
        ref={register('email').ref}
        value={watch('email')}
        onChange={(e) => {
          setValue('email', String(e.target.value))
          // defaultValues.email =  String(e.target.value)
          setField('email', e.target.value)
          console.log(secondStep);
          trigger('email')
        }}
        {...register}
      />
    </div>
  )
}

export default RegisterFields