import React from 'react';
import {MdOutlineDashboard} from "react-icons/md";
import { AiFillProduct } from "react-icons/ai";
import {FaUser} from "react-icons/fa";
import {NavLink} from "react-router-dom";

const SideBar = () => {
    return (
        <div className={'w-[20%] h-[100vh] bg-indigo-950 pl-4 pr-4'}>
            <h2 className={'text-center text-3xl mt-[20px] text-amber-50 mb-2'}>ToDo</h2>
            <NavLink to={'/'}
                     className={'flex gap-1.5 items-center bg-indigo-400 rounded-[7px] p-1 cursor-pointer mb-2.5'}>
                <MdOutlineDashboard size={30} color={'white'}/>
                <h3 className={'text-2xl text-amber-50'}>Dashboard</h3>
            </NavLink>
            <NavLink to={'/profile'}
                     className={'flex gap-1.5 items-center bg-indigo-400 rounded-[7px] p-1 cursor-pointer'}>
                <FaUser size={30} color={'white'}/>
                <h3 className={'text-2xl text-amber-50'}>Profile</h3>
            </NavLink>
            <NavLink to={'/products'}
                     className={'flex gap-1.5 mt-2.5 items-center bg-indigo-400 rounded-[7px] p-1 cursor-pointer'}>
                <AiFillProduct size={30} color={'white'}/>
                <h3 className={'text-2xl text-amber-50'}>Products</h3>
            </NavLink>
        </div>
    );
};

export default SideBar;