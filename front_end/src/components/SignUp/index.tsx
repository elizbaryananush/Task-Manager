import { useParams } from 'next/navigation'
import RegisterForm1 from './forms/RegisterForm1/RegisterForm'
import RegisterForm2 from './forms/RegisterForm2/RegisterForm'
import Logo from '../../public/assets/Logo.svg?inline'

import styles from './index.module.scss'
import RegisterForm3 from './forms/RegisterForm3/RegisterForm'

export default function SignUp() {
  const params = useParams()
  return (
    <div className={styles.signUpBox}>
      <Logo className={styles.Logo} width={261} height={45} />
      {params?.id == '1' && <RegisterForm1 />}
      {params?.id == '2' && <RegisterForm2 />}
      {params?.id == '3' && <RegisterForm3 />}
    </div>
  )
}
