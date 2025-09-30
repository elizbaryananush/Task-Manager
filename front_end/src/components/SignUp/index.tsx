import { useParams } from 'next/navigation'
import Text from '../../componentsUI/Text'
import RegisterForm1 from '../../forms/RegisterForm/RegisterForm1/RegisterForm'
import RegisterForm2 from '../../forms/RegisterForm/RegisterForm2/RegisterForm'
import Logo from '../../public/assets/Logo.svg?inline'

import styles from './index.module.scss'
import RegisterForm3 from '../../forms/RegisterForm/RegisterForm3/RegisterForm'
import Button from '../../componentsUI/Button'
import GoogleIcon from '../../public/assets/icons/google.svg'

export default function SignUp() {
  const params = useParams()
  return (
    <div className={styles.signUpBox}>
      <Logo className={styles.Logo} width={261} height={45} />
      {params?.id == '1' && (
        <>
          <RegisterForm1 />
          <Button icon>
            <GoogleIcon />
            <Text>Continue with Google</Text>
          </Button>
          <Text classname={styles.text}>
            Already have an account ? <a href="/signin">Log in</a>
          </Text>
        </>
      )}
      {params?.id == '2' && <RegisterForm2 />}
      {params?.id == '3' && <RegisterForm3 />}
    </div>
  )
}
