import {useAuth} from "../context/auth"
const Register = () => {
  const [auth, setAuth] = useAuth()
  return (
    <div>Register</div>
  )
}

export default Register