import React from 'react'
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

const RegisterForm3 = () => {
  const router = useRouter()
  const form = useForm<TRegisterData1>({
    resolver: yupResolver(SignUpSchema1),
    defaultValues: DefaultState1,
  })

  const {
    formState: { isValid },
  } = form

  const onSubmit = e => {
    e.preventDefault()
    router.push('/signUp/2')
  }

  return (
    <FormProvider {...form}>
      <form className={styles.RegisterForm} onSubmit={e => onSubmit(e)}>
        <RegisterFields defaultValues={DefaultState1} />
        <Button disabled={!isValid} type="submit">
          Sign Up
        </Button>
      </form>
    </FormProvider>
  )
}

export default RegisterForm3
