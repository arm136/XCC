import { React, useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import Navbar from '../component/Navbar';
import Sidenav from '../component/Sidenav';
// import Divider from '@mui/material/Divider';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ResourcesTable from '../../admin/tables/ResourcesTable';
import Resourcetb from './Resourcetb';

const Resources = () => {



  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
    axios.get('http://localhost:8081/Resources')
      .then(res => {
        if (res.data.Status === "Success") {
          if (res.data.role === "user") {
            navigate('/Resources');
          }
        } else {
          navigate('/start')
          console.log('Access Denied!');
        }
      })
  }, [navigate])

  //**************PDF***************** */
  const [pdfList, setPdfList] = useState([]);

  useEffect(() => {
    fetchPDFList();
  }, []);

  const fetchPDFList = () => {
    fetch('http://localhost:8081/resources')
      .then((response) => response.json())
      .then((data) => {
        setPdfList(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const openPDF = (id) => {
    window.open(`http://localhost:8081/resources/${id}`, '_blank');
  };

  // *********************************



  return (
    <Box>

      <Navbar />
      <Box height={50} />
      <Box sx={{ display: 'flex' }}>
        <Sidenav />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>

          <Typography
            variant="h4"
            sx={{ p: 0.9 }}
          >
            Resources
          </Typography>
          {/* <Divider/>  */}
          <hr />
          <br />
          {/* <Box sx={{ flexGrow: 1 }}>

            <Typography>PDF List</Typography>
            <hr /> */}
            {/* {pdfList.map((pdf) => (
              <Box sx={{ flexGrow: 1 }} key={pdf.id}>
                <Typography>{pdf.title}</Typography>
                <Button onClick={() => openPDF(pdf.id)}>open Pdf</Button>
                
              </Box>
            ))} */}

            <Resourcetb />

          {/* </Box> */}



        </Box>
      </Box>

    </Box>
  );
}

export default Resources;