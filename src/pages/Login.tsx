import {useAuth} from "../context/auth"

const Login = () => {
  const [auth, setAuth] = useAuth()
  return (
    <div>Login</div>
  )
}

export default Login