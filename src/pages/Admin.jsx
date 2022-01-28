import {useAuth} from "../context/auth/index"
export const Admin = () => {

    const auth = useAuth()
    console.log(auth);
    return (
        <div>
            Dentro del sistema
        </div>
    )
}
