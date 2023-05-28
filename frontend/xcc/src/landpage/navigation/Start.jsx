import {
  Button,
  Box,
  Typography,
  Divider,
  Stack,
} from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import X1 from './X1.png';

function Start() {
  const navigate = useNavigate()
  return (
    // <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
    //         <div className='p-3 rounded w-25 border loginForm text-center'>
    //             <h2>Login As</h2>
    //             <div className='d-flex justify-content-between mt-5'>
    //                 <button className='btn btn-primary btn-lg' onClick={e => navigate('/Login')}>Admin</button>
    //                 <button className='btn btn-success btn-lg' onClick={e => navigate('/')}>User</button>
    //       <button className='btn btn-success btn-lg' onClick={e => navigate('/slogin')}>Student</button>
    //       <Button></Button>
    //             </div>
    //         </div>
    //     </div>
    <>
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
          display={'flex'}
          justifyContent={'center'}
        >
          <Stack spacing={2}>

            <Box
              display={'flex'}
              alignItems={'center'}
              justifyContent={'center'}
            >
              <img alt="img" width={100} height={50} src={X1} />
            </Box>
            <Typography
              textAlign={'center'}
              variant='h4'
              fontFamily={'serif'}
            >
              Login
            </Typography>

              <Divider sx={{ backgroundColor: 'grey' }} />

            <br />

            <Stack direction='row' spacing={2}>

              <Button  variant='contained' onClick={e => navigate('/AdLogin')}>admin</Button>
              <Button variant='contained' onClick={e => navigate('/Login')}>User</Button>
            </Stack>
            <br />
            <Button variant='' endIcon={<ArrowBackIosNewIcon/>} onClick={e => navigate('/NewNav')}></Button>
          </Stack>
        </Box>

      </Box>
    </>
  )
}

export default Start