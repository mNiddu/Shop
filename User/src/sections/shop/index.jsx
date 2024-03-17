/* eslint-disable perfectionist/sort-imports */
/* eslint-disable import/no-extraneous-dependencies */
// import { useNavigate } from 'react-router-dom';
import { Box,Grid,TextField} from '@mui/material'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';

import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import Typography from '@mui/material/Typography';


import Iconify from 'src/components/iconify';


// import { emptyRows, applyFilter, getComparator } from '../utils';
;


// ----------------------------------------------------------------------

export default function UserPage() {

    const navigate=useNavigate();

    const [shop,setShop]=useState({})

    const HandleShop=(e)=>{
       
        setShop({...shop,[e.target.name]:e.target.value})
    }
console.log(shop)
  const HandleAddShop=()=>{
    console.log('jjj')
   axios.post('https://shop-api-ten.vercel.app/api/shop/insert',shop)
   .then((res)=>{
    if(res.data.success===true){
      toast.success('Shop Inserted', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
       
        });
       
        setTimeout(()=>{
          navigate('/user')
        },2000)
    }
  })
  .catch((err)=>{
    console.log(err)
  })
  }

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Add Shop</Typography>
      </Stack>
      <ToastContainer
    position="top-right"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
  />
      <Card>
  <Box sx={{ width: '100%',padding:'20px'}}>
    <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
      <Grid item xs={12} sm={6}>
        <TextField sx={{ width: '100%' }} variant='outlined' onChange={HandleShop} name='shop_name' label="Shop Name" />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField sx={{ width: '100%' }} variant='outlined' onChange={HandleShop} name="owner_name" label="Owner Name" />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField sx={{ width: '100%' }} variant='outlined' onChange={HandleShop} name='owner_phone' label="Phone Number" />
      </Grid>
      <Grid item xs={12} sm={6}>
      <TextField sx={{ width: '100%' }} variant='outlined' onChange={HandleShop} name="owner_address" label="Address" />
      </Grid>
      <Grid item xs={12} sm={12}>
      <Box sx={{display:'flex',justifyContent:'end'}}>
      <Button variant="contained" onClick={HandleAddShop} sx={{ width: '100%' }} color="inherit" startIcon={<Iconify icon="eva:plus-fill" />}>
          Add Shop
        </Button>
      </Box>
      </Grid>
    </Grid>
  </Box>
</Card>

    </Container>
  );
}
