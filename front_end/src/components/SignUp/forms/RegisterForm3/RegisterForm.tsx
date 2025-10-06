import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  DefaultState1,
  TRegisterData1,
} from '../../../../types/componentsTypes/registerData.type'
import { SignUpSchema1 } from '../../../../types/schemas/signUp.schema'
import Button from '../../../../componentsUI/Button'
import styles from './index.module.scss'
import { useRouter } from 'next/navigation'
import OTPInput from '../../../../componentsUI/OTPNumberInput/otp-input'
import Text from '../../../../componentsUI/Text'

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
    <div className={styles.box}>
      <OTPInput />
      <Text>Didn’t get the code? Resend in 0:59</Text>
      <Button disabled>Resend code</Button>
    </div>
  )
}

export default RegisterForm3
