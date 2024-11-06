import React from 'react';
import SideBar from "../sidebar/SideBar.tsx";
import {Outlet} from "react-router-dom";
import Header from "../header/Header.tsx";

const Layout = () => {
    return (
        <div className={'flex relative'}>
            <SideBar/>
            <main className={'pl-[40px] pr-[40px] w-[80%]'}>
                <Header/>
                <Outlet/>
            </main>
        </div>
    );
};

export default Layout;