import { useKeycloak } from "@react-keycloak/web"

const PrivateRoute = ({children}) => {
    const { keycloak } = useKeycloak()
    return keycloak.authenticated ? children : null
}

export default PrivateRoute