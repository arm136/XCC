import { React, useState, useEffect } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import axios from "axios";
import { Box } from '@mui/material';


function FGallery() {

    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8081/gallery")
            .then((res) => {
                if (res.data.Status === "success") {
                    console.log(res.data.Result);
                    setData(res.data.Result);
                }
            })
            .catch((err) => console.log(err));
    }, []);

    const [data, setData] = useState([]);

    return (
        <Box >
            <Carousel activeIndex={index} onSelect={handleSelect}>

                {data.map((events, index) => {
                    return (
                        <Carousel.Item className='carousel'>
                            {/* <img
                    className="d-block w-100"
                    src="holder.js/800x400?text=First slide&bg=373940"
                    alt="First slide"
                /> */}

                            <img alt="img" src={`http://localhost:8081/pdf/` + events.image}
                                style={{
                                    height: "300px",
                                    width: "500px",
                                }}
                            />

                            {/* <Carousel.Caption className='carousel' key={index}>
                            <h2>{events.description }</h2>
                            <h3>{events.date}</h3>
                        </Carousel.Caption> */}
                            <h2>{events.description}</h2>
                            <h2>{events.date}</h2>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </Box>
    )
}

export default FGallery