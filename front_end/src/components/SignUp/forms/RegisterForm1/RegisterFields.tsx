import React, { FC, useState } from 'react'
import Input from '../../../../componentsUI/Input'
import { useFormContext } from 'react-hook-form'
import { TRegisterData1 } from '../../../../types/componentsTypes/registerData.type'
import styles from './index.module.scss'
import { useFirstStepData } from '../../../../store/features/register/hooks'

interface IProp {
  defaultValues: TRegisterData1
}

const RegisterFields: FC<IProp> = ({ defaultValues }) => {
  const {
    register,
    setValue,
    watch,
    trigger,
    formState: { errors },
  } = useFormContext<TRegisterData1>()
  const { setField } = useFirstStepData()

  return (
    <div className={styles.RegisterFields}>
      <Input
        type="text"
        id="name"
        label="name"
        error={errors.name?.message}
        ref={register('name').ref}
        value={watch('name')}
        onChange={e => {
          setValue('name', String(e.target.value))
          setField('name', e.target.value)
          trigger('name')
        }}
        {...register}
      />
      <Input
        type="text"
        id="username"
        label="username"
        error={errors.username?.message}
        ref={register('username').ref}
        value={watch('username')}
        onChange={e => {
          setValue('username', String(e.target.value))
          setField('username', e.target.value)
          trigger('username')
        }}
        {...register}
      />
      <Input
        type="text"
        password
        id="password"
        label="password"
        error={errors.password?.message}
        ref={register('password').ref}
        value={watch('password')}
        onChange={e => {
          setValue('password', String(e.target.value))
          setField('password', e.target.value)
          trigger('password')
        }}
        {...register}
      />
    </div>
  )
}

export default RegisterFields
