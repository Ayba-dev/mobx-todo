import React from 'react';
import {InputAdornment, TextField} from "@mui/material";
import {CiSearch} from "react-icons/ci";
import {MdClear} from "react-icons/md";


type PropsType = {
    value?: string,
    onChange?: () => void,
    label?: string,
    icon?: React.ReactNode,
    icon2?: React.ReactNode,
    placeholder?: string
}
const Input = ({value, onChange, label, placeholder}: PropsType) => {
    return (
        <TextField
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            id="outlined-basic"
            label={label}
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <CiSearch size={25}/>
                    </InputAdornment>
                ),
                endAdornment: (
                    <InputAdornment
                        position="end"

                    >
                        <MdClear size={25}/>
                    </InputAdornment>
                )
            }}
        />
    );
};

export default Input;