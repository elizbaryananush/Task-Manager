import React from 'react'
import styles from './modal.module.scss'
import SignIn from '.'

const SignInModal = () => {
  return (
    <div className={styles.container}>
      <SignIn />
    </div>
  )
}

export default SignInModal
