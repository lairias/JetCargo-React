import {useAuth} from "../context/auth/index"
import useUser from "../hooks/useUser"
export const Admin = () => {

    const auth = useAuth()
    const {isLogged } = useUser()
console.log(isLogged)

    console.log(auth);
    return (
        <div>
            Dentro del sistema
        </div>
    )
}
