import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Layout from "./components/layout/Layout.tsx";
import HomePage from "./pages/HomePage/homePage.tsx";
import ProfilePage from "./pages/ProfilePage/ProfilePage.tsx";
import ProtectedRoutes from "./components/protectedRoutes/protectedRoutes.tsx";
import Register from "./pages/Register/Register.tsx";
import LoginPage from "./pages/Login/Login.tsx";
import ProtectedUser from "./components/protectedUser/ProtectedUser.tsx";
import ProductsPage from "./pages/ProductsPage/ProductsPage.tsx";


function App() {

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path={'/'} element={<ProtectedRoutes><Layout/></ProtectedRoutes>}>
                    <Route index element={<HomePage/>}/>
                    <Route path={'/profile'} element={<ProfilePage/>}/>
                    <Route path={'/products'} element={<ProductsPage/>}/>
                </Route>
                <Route path={'/register'} element={<ProtectedUser><Register/></ProtectedUser>}/>
                <Route path={'/login'} element={<ProtectedUser><LoginPage/></ProtectedUser>}/>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
        </>
    );
}

export default App;