import Text from "../../componentsUI/Text";
import Logo from "../../public/assets/Logo.svg?inline";
// import Logo from "@/assets/Logo.svg";
import InputBox from "./components/inputBox/inputBox";
import styles from './index.module.scss'
export default function SignIn() {
  return (
    <div className={styles.signInBox}>
      <Logo className={styles.Logo} width={261} height={45}/>
      <InputBox />
      <Text classname={styles.text}>Don{`'`}t have an account? <a href='/signup'>Register</a></Text>
    </div>
  );
}
