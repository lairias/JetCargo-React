import {useUser} from "../hooks/useUser"
export const Admin = () => {

    const {isLogged } = useUser()
console.log(isLogged)

    return (
        <div>
            Dentro del sistema
        </div>
    )
}
