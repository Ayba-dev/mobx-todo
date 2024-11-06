import React, {useEffect, useState} from 'react';
import Input from "../../components/input/Input.tsx";
import Button from "../../components/button/Button.tsx";
import {MdAddCircleOutline} from "react-icons/md";
import {store} from "../../store/Store.ts";
import {observer} from "mobx-react-lite";
import CardInput from "../../components/cardInput/CardInput.tsx";
import {ToastContainer} from "react-toastify";
import {userStore} from "../../store/AuthStore.ts";



const HomePage = observer(() => {

    const [showCardAdd, setShowAdd] = useState(false)
    const [title, setTitle] = useState('')
    const [text, setText] = useState('')


    const showCardChange = () => {
        setShowAdd(true)
    }

    const handleAddCard = () => {
        // Вызываем функцию addCard, передавая title и text
        store.addToDo(title, text);
        setText('')
        setTitle('')
        setShowAdd(false)
    };

    useEffect(() => {
        if (userStore.userDeleted) {
            alert('User deleted successfully!');


            // Optionally, you can redirect or update the UI here
        }

        if (userStore.error) {
            alert(`Error: ${userStore.error}`); // Display error message
        }
    }, [userStore.userDeleted, userStore.error]); // Dependency array


    return (
        <div>
            <div className={'flex items-center justify-between'}>
                <div>
                    <h2 className={'text-2xl mb-2.5'}>My Todo</h2>
                    <label htmlFor="">
                        <Input placeholder={'Search'} label={'Search'}/>
                    </label>
                </div>
                <div>
                    <div className={' mb-[20px] rounded-[50%] bg-blue-950 w-[40px] h-[40px]'}>
                        <img src="" alt=""/>
                    </div>
                    <Button className={'flex gap-3  items-center bg-blue-950 text-amber-50 p-3 rounded-[6px]'}
                            icon={<MdAddCircleOutline size={25}/>} type={'button'}>
                        New task
                    </Button>
                </div>
            </div>
            <h3 className={'text-center text-3xl mb-[30px] mt-[30px]'}>Todo</h3>
            <div className={'flex justify-between  flex-wrap'}>
                {
                    store.todo.length === 0 ? <div>Пусто</div> :
                        store.todo.map((item) => (
                            <Card setShowAdd={setShowAdd} {...item}/>
                        ))
                }
            </div>
            {
                showCardAdd ?
                    <CardInput
                        handleAddCard={handleAddCard}
                        setShowAdd={setShowAdd}
                        setText={setText}
                        setTitle={setTitle} text={text}
                        title={title}/> :
                    <Button
                        onClick={showCardChange}
                        className={'flex items-center border p-[10px] gap-3 w-[280px] rounded-2xl'}
                        icon={<MdAddCircleOutline size={20}/>} type={'button'}>
                        Add New
                    </Button>
            }
            <ToastContainer/>
        </div>
    );
});

export default HomePage;