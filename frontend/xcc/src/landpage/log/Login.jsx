import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import {
    TextField,
    Box,
    Button,
    Typography,
    Divider,
    Stack,
} from "@mui/material";

import X1 from '../navigation/X1.png'


export const Login = () => {
    const [values, setValues] = useState({
        email: '',
        password: ''
    })
    const [message, setMessage] = useState('');

    axios.defaults.withCredentials = true;
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    const [error, setError] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.post('http://localhost:8081/Login', values)
            .then(res => {
                if (res.data.Status === 'Success') {
                    const id = res.data.id;
                    navigate('/Resources');
                } else {
                    setMessage('Invalid Credencials');
                    setError(res.data.Error);
                }
            })
            .catch(err => console.log(err));

    };



    return (
        <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
            minHeight='100vh'
            sx={{ backgroundColor: '#FF6D60' }}
        >
            <Box
                sx={{
                    width: 500,
                    justifyContent: "center",
                    display: 'flex',
                    backgroundColor: 'white'
                }}
                paddingLeft={5}
                paddingRight={5}
                paddingTop={1}
                paddingBottom={6}
                borderRadius={5}
                boxShadow={20}
                margin={2}
            >

                <form onSubmit={handleSubmit}>

                    <Stack spacing={2} >

                        <Box
                            display={'flex'}
                            alignItems={'center'}
                            justifyContent={'center'}
                        >
                            <img alt="img" width={100} height={50} src={X1} />
                        </Box>
                        <Typography
                            // display={'flex'}
                            textAlign={'center'}
                            variant='h4'
                            fontFamily={'serif'}
                        >
                            User Login
                        </Typography>
                        <Divider sx={{ backgroundColor: 'grey' }} />
                        <br />

                        <TextField
                            required
                            type='email'
                            label="Email"
                            onChange={e => setValues({ ...values, email: e.target.value })}
                        />

                        <TextField
                            required
                            type="password"
                            label="password"
                            onChange={e => setValues({ ...values, password: e.target.value })}
                        />

                        <Typography color={"red"}>
                            {message}
                        </Typography>

                        <Button
                            type="submit"
                            variant='contained'
                        >
                            Login
                        </Button>


                    </Stack>
                </form>
            </Box>
        </Box>
    );
};