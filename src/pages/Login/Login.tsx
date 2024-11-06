import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";
import {userStore} from "../../store/AuthStore.ts";
import {useForm, SubmitHandler} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {observer} from "mobx-react-lite";
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


interface IUser {
    username: string,
    password: string
}

const LoginPage = observer(() => {

    const navigate = useNavigate()


    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm<IUser>()


    const onSubmit: SubmitHandler<IUser> = async (data) => {
        await userStore.login(data)
        toast.success('Wow so easy!')
        navigate('/')
    }


    return (
        <>

            <Box
                onSubmit={handleSubmit(onSubmit)}
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    width: '300px',
                    margin: 'auto',
                    padding: '20px',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '2px 2px 12px rgba(0, 0, 0, 0.1)',
                }}
            >
                <Typography variant="h5" gutterBottom>
                    Login Form
                </Typography>

                <TextField
                    {...register('username', {required: 'Username обязателен'})}
                    error={!!errors.username}
                    label="Username"
                    variant="outlined"
                    required
                />

                <TextField
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength:
                            {
                                value: 6, message: 'Минимальная длина пароля 6 символов'
                            }
                    })}
                    error={!!errors.password}
                    label="Password"
                    type="password"
                    variant="outlined"
                    required
                />

                <Button type="submit" variant="contained" color="primary" disabled={userStore.isLoading}>
                    {userStore.isLoading ? 'Logging in...' : 'Login'}
                </Button>

                {userStore.error && <Typography color="error">{userStore.error}</Typography>}
            </Box>
        </>

    )
})
export default LoginPage;