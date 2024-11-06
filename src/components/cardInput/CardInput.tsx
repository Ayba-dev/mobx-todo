import React from 'react';
import Button from "../button/Button.tsx";



interface ICardInput {
    title: string,
    text: string,
    setText: (text: string) => void,
    setTitle: (title: string) => void,
    setShowAdd: (bool: boolean) => void,
    handleAddCard: () => void
}

const CardInput = ({title, text, setText, setTitle, handleAddCard}: ICardInput) => {




    const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }

    const onChangeText = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setText(e.target.value)
    }


    return (
        <div className={' rounded-2xl border-2 w-[280px] mb-[10px] p-[20px]'}>
            <label className={'mb-2.5'}>
                <input type={'text'} onChange={onChangeTitle} value={title} placeholder={'Title'}
                       className={'outline-none w-[100%] border-2 mt-2 p-1'}/>
            </label>
            <label>
                <textarea onChange={onChangeText} className={'outline-none w-[100%] border-2 mt-2 p-1 h-[80px]'}
                          value={text} placeholder={'Text'}/>
            </label>
            <Button onClick={handleAddCard}
                    className={'bg-blue-950 w-[100%] h-[35px] mt-2 text-amber-50 flex items-center justify-center'}
                    type={'button'}>Add Task</Button>
        </div>
    );
};

export default CardInput;