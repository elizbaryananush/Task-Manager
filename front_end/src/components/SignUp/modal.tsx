import React from 'react'
import styles from './modal.module.scss'
import SignUp from '.'

const SignUpModal = () => {
  return (
    <div className={styles.container}>
      <SignUp />
    </div>
  )
}

export default SignUpModal
