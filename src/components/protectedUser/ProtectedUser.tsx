import React  from 'react';
import {Navigate} from "react-router-dom";
import {api} from "../../api/api.ts";
import {observer} from "mobx-react-lite";
import {userStore} from "../../store/AuthStore.ts";

const ProtectedUser = observer(({children}) => {
    const  token  =  api.token || userStore.authenticated

    
    return (
        <div>
            {token ? <Navigate to={'/'}/>  : children ||  <Navigate to={'/login'}/> }
        </div>
    );
});

export default ProtectedUser;