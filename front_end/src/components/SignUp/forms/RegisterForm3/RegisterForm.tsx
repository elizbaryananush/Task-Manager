import React, { useEffect, useState } from 'react'
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
import TimeoutButton from './components/timeoutButton'

const RegisterForm3 = () => {
  const router = useRouter()
  const [code , setCode] = useState<string>()

  useEffect(() => {
console.log(code);
  } , [code])

  const onSubmit = e => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <OTPInput onChange={setCode}/>
      <Text classname={styles.text}>Didn’t get the code? Resend in 0:59</Text>
      <TimeoutButton />
    </div>
  )
}

export default RegisterForm3
