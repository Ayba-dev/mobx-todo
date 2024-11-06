import {Navigate} from "react-router-dom";
import {api} from "../../api/api.ts";
import {userStore} from "../../store/AuthStore.ts";
import {observer} from "mobx-react-lite";

const ProtectedRoutes = observer(({children}) => {
    const authenticated = userStore.authenticated || api.token
    return (
        authenticated ?  children :  <Navigate to={'/login'}/>
    )
});

export default ProtectedRoutes;