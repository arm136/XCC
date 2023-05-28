import React,{useEffect} from "react";
import Sidenav from "../components/Sidenav";
import Appbar from "../components/Appbar";
import Box from '@mui/material/Box';
import EventsForm from "../tables/EventsForm";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';




function AddEvents() {
    const navigate = useNavigate()
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get('http://localhost:8081/adminAddEvents')
            .then(res => {
                if (res.data.Status === "Success") {
                    if (res.data.role === "admin") {
                        const id = res.data.id;
                        navigate('/adminAddEvents');
                    }
                } else {
                    navigate('/start');
                    console.log('Access Denied!');
                }
            })
    }, [])

    return (
        <>
            <Appbar />
            <Box height={50} />
            <Box sx={{ display: 'flex' }}>
                <Sidenav />
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

                    <h1>Events</h1>
                    <EventsForm />

                </Box>
            </Box>
        </>
    )
};

export default AddEvents;