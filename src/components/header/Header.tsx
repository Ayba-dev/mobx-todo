import React from 'react';
import {IoChevronForwardOutline} from "react-icons/io5";
import {RiMenuUnfold4Line2} from "react-icons/ri";
import {useLocation} from "react-router-dom";

const Header = () => {
    const {pathname} = useLocation()
    return (
        <div className={'flex gap-8 pt-[30px] pb-[20px] border-b-2 mb-[30px]'}>
            <div className={'flex gap-3 items-center cursor-pointer'}>
                <RiMenuUnfold4Line2/>
                <IoChevronForwardOutline/>
            </div>
            <div
                className={`${pathname === '/' ? ' p-1 rounded-[10px] bg-gray-700 text-amber-50 flex gap-3 items-center cursor-pointer' : 'text-amber-50 flex gap-3 items-center cursor-pointer'}`}>
                <h2 className={`${pathname === '/' ? 'text-amber-50' : 'text-gray-600'}`}>Dashboard</h2>
                <IoChevronForwardOutline/>
            </div>
            <div
                className={`${pathname === '/profile' ? ' p-1 rounded-[10px] bg-gray-700 text-amber-50 flex gap-3 items-center cursor-pointer' : 'text-amber-50 flex gap-3 items-center cursor-pointer'}`}>
                <h3 className={`${pathname === '/profile' ? 'text-amber-50' : 'text-gray-600'}`}>Profile</h3>
                <IoChevronForwardOutline/>
            </div>
        </div>
    );
};

export default Header;