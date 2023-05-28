import React, { useState } from "react";
import {
    Box,
    Button,
    List,
    ListItem,
    TextField,
    useTheme,
    useMediaQuery,
    Stack
} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';

export const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
        alert('Message sent!');
        setName('');
        setEmail('');
        setMessage('');

    };

    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'))


    return (
        <div>
            {
                isMatch ? (
                    <>
                        <Box
                            sx={{
                                // width: 10,
                                justifyContent: "center",
                                display: 'flex',
                            }}
                            // boxShadow={20}
                            borderRadius={5}
                        >
                            <List>
                                <form onSubmit={handleSubmit}>

                                    <ListItem>
                                        <TextField
                                            required
                                            value={name}
                                            id="outlined-required"
                                            label="Name"
                                            onChange={handleNameChange}

                                        />
                                    </ListItem>

                                    <ListItem>
                                        <TextField
                                            required
                                            value={email}
                                            id="outlined-required"
                                            label="Email"
                                            onChange={handleEmailChange}
                                        />
                                    </ListItem>

                                    <ListItem>

                                        <TextField
                                            sx={{ width: 222 }}
                                            required
                                            value={message}
                                            id="outlined-mutiline-static"
                                            multiline
                                            rows={4}
                                            label="Message"
                                            onChange={handleMessageChange}
                                        />
                                    </ListItem>

                                    <Button variant="outlined" type="submit">
                                        Submit
                                    </Button>
                                </form>
                            </List>
                        </Box>
                    </>

                ) : (
                    <Box>
                        <Box
                            sx={{
                                width: 500,
                            }}
                            boxShadow={20}
                            borderRadius={5}
                            display={'flex'}
                            padding={2}
                            justifyContent={'center'}
                        >
                            <form onSubmit={handleSubmit}>

                                <Stack spacing={2}>


                                    <TextField
                                        required
                                        value={name}
                                        id="outlined-required"
                                        label="Name"
                                        onChange={handleNameChange}

                                    />

                                    <TextField
                                        required
                                        value={email}
                                        id="outlined-required"
                                        label="Email"
                                        onChange={handleEmailChange}
                                    />


                                    <TextField
                                        sx={{ width: 222 }}
                                        required
                                        value={message}
                                        id="outlined-mutiline-static"
                                        multiline
                                        rows={4}
                                        label="Message"
                                        onChange={handleMessageChange}
                                    />


                                    <Button type="submit" variant="contained" endIcon={<SendIcon/>}>
                                        Submit
                                    </Button>
                                </Stack>
                            </form>

                        </Box>
                    </Box>
                )
            }
        </div >
    );
};
