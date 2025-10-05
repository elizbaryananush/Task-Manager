import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  DefaultState2,
  TRegisterData2,
} from '../../../../types/componentsTypes/registerData.type'
import { SignUpSchema2 } from '../../../../types/schemas/signUp.schema'
import RegisterFields from './RegisterFields'
import Button from '../../../../componentsUI/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'
import { useSendEmailMutation } from '../../../../api/hooks/auth'
import { useSecondStepData } from '../../../../store/features/register/hooks'

const RegisterForm2 = () => {
  const router = useRouter()
    const { ...secondStep } = useSecondStepData()

  const form = useForm<TRegisterData2>({
    resolver: yupResolver(SignUpSchema2),
    defaultValues: secondStep,
  })
  const { mutate } = useSendEmailMutation()

  const {
    formState: { isValid },
  } = form

  const onSubmit = e => {
    e.preventDefault()
    mutate(secondStep)
    router.push('/signup/3')
  }

  return (
    <FormProvider {...form}>
      <form className={styles.RegisterForm} onSubmit={e => onSubmit(e)}>
        <RegisterFields defaultValues={DefaultState2} />
        <Button disabled={!isValid} type="submit">
          Send code
        </Button>
      </form>
    </FormProvider>
  )
}

export default RegisterForm2
