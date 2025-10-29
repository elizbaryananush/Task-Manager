import React, { useEffect } from 'react'
// import Input from '../../../../componentsUI/Input'
import styles from './styles.module.scss'
import Checkbox from '../checkbox/Checkbox'
import Button from '../../../../componentsUI/Button'
import Google from '../../../../public/icons/google.svg'
const InputBox = () => {
  useEffect(() => {
console.log(typeof Google);

  } , [])
  return (
    <div className={styles.inputBox}>
      {/* <Input type="text" label="Username" id="1" />
      <Input type="text" label="Password" id="2" /> */}
      <Checkbox text='Remember me'/>
      <Button>Log in</Button>
      <Button buttontype='secondary' icon={<Google />}>Log in with google</Button>
    </div>
  )
}

export default InputBox
