import React, {useEffect} from 'react';
import { MdEmail,  MdOutlinePhone  } from "react-icons/md";
import { FaBirthdayCake } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import {userStore} from "../../store/AuthStore.ts";
import {observer} from "mobx-react-lite";




const ProfilePage = observer(()  => {

    const {userSingle} = userStore

    useEffect(() => {
        userStore.getUser('3')

    }, [])



    return (
        <div>
            <div className={'w-[150px] h-[150px] rounded-[50%] bg-blue-950'}>

            </div>
            <h2 className={'border-b-2 text-2xl mt-2 mb-8 pb-[25px]'}>{userSingle?.name.firstname}</h2>

            <div className={'flex gap-[130px]'}>
                <div>
                    <div className={'flex gap-4 items-center mb-2.5'}>
                        <MdEmail/>
                        <h3>Email</h3>
                    </div>
                    <div className={'flex gap-4 items-center mb-2.5'}>
                        <MdOutlinePhone/>
                        <h3>Phone</h3>
                    </div>
                    <div className={'flex gap-4 items-center mb-2.5'}>
                        <FaBirthdayCake/>
                        <h3>Birth</h3>
                    </div>
                    <div className={'flex gap-4 items-center mb-2.5'}>
                        <IoLocationOutline/>
                        <h3>Address</h3>
                    </div>
                </div>
                <ul>
                    <li className={'mb-2.5'}>{userSingle?.email}</li>
                    <li className={'mb-2.5'}>{userSingle?.phone}</li>
                    <li className={'mb-2.5'}>{userSingle?.name?.firstname}</li>
                    <li className={'mb-2.5'}>{userSingle?.address?.street}</li>
                </ul>
            </div>
        </div>
    );
});

export default ProfilePage;