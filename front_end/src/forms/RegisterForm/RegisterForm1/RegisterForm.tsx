'use client'

import React, { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  DefaultState1,
  TRegisterData1,
} from '../../../types/componentsTypes/registerData.type'
import { SignUpSchema1 } from '../../../types/schemas/signUp.schema'
import RegisterFields from './RegisterFields'
import Button from '../../../componentsUI/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'
import Text from '../../../componentsUI/Text'
import { useRegisterData } from '../../../features/register/hooks'

const RegisterForm1 = () => {
  const router = useRouter()
  const form = useForm<TRegisterData1>({
    resolver: yupResolver(SignUpSchema1),
    defaultValues: DefaultState1,
  })
  const data = useRegisterData()

  const {
    formState: { isValid },
  } = form

  const onSubmit = e => {
    e.preventDefault()
    router.push('/signup/2')
  }

  useEffect(() => {
    console.log(data);
  }, [])

  return (
    <FormProvider {...form}>
      <form className={styles.RegisterForm} onSubmit={e => onSubmit(e)}>
        <RegisterFields defaultValues={DefaultState1} />
        <Button disabled={!isValid} type="submit">
          <Text>Register</Text>
        </Button>
      </form>
    </FormProvider>
  )
}

export default RegisterForm1
