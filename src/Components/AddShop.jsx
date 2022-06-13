import React, { Fragment } from 'react'
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validationSchema';
import {Alert, Button, Container, FormControl, FormHelperText, InputLabel, MenuItem, Paper, Select, Snackbar, Stack, TextField, Typography} from "@mui/material"
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';
import AddIcon from '@mui/icons-material/Add';

const AddShop = () => {

    const dispatch = useDispatch();

    const {add} = useSelector(state=>state.shopState);
    const areas = [
        "Thane",
        "Pune",
        "Mumbai Suburban",
        "Nashik",
        "Nagpur",
        "Ahmednagar",
        "Solapur"
    ]

    const categories = [
        "Grocery",
        "Butcher",
        "Baker",
        "Chemist",
       "Stationery shop"
    ]

    const initialValues={
        name:"",
        area:"",
        category:"",
        openDate:"",
        closeDate:""
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        dispatch({
            type:'formReset'
        })
      };
    
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema,
        onSubmit: (values) => {
        const uid = uuid();
        values._id = uid
          dispatch({
            type:"add",
            payload:values
          })
          formik.resetForm()
        },
    });




  return (
    <Fragment>
        <Typography variant='h4' color='primary' align='center' sx={{padding:'2rem'}}  >Add a Shop</Typography>
        <form onSubmit={formik.handleSubmit}>
            <Container sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
                <Paper elevation={6} sx={{width:{md:'30vw', xs:'80vw'}}}>
                    <Stack spacing={2} sx={{padding:'10%'}}>
                        <TextField 
                            fullWidth id='name' 
                            name='name' 
                            autoComplete='off'
                            label='Shop Name' 
                            value={formik.values.name}
                            onChange={formik.handleChange} 
                            error={formik.touched.name && Boolean(formik.errors.name)}  
                            helperText={formik.touched.name && formik.errors.name}
                        />

                        <FormControl fullWidth error={formik.touched.area && Boolean(formik.errors.area)}>
                            <InputLabel id='areaLabel'>Area</InputLabel>
                            <Select
                                labelId='areaLabel'
                                id='area'
                                name='area'
                                label='Area'
                                value={formik.values.area}
                                onChange={formik.handleChange}
                                error={formik.touched.area && Boolean(formik.errors.area)}  
                            >
                                {areas.map((i, idx)=>(
                                    <MenuItem key={idx} value={i}>{i}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.area && <FormHelperText>{formik.errors.area}</FormHelperText>}
                        </FormControl>

                        <FormControl fullWidth error={formik.touched.category && Boolean(formik.errors.category)}  >
                            <InputLabel id='categoryLabel'>Category</InputLabel>
                            <Select
                                labelId='categoryLabel'
                                id='category'
                                name='category'
                                label='Category'
                                value={formik.values.category}
                                onChange={formik.handleChange}
                                
                            >
                                {categories.map((i, idx)=>(
                                    <MenuItem key={idx} value={i}>{i}</MenuItem>
                                ))}
                            </Select>
                            {formik.touched.category && <FormHelperText>{formik.errors.category}</FormHelperText>}
                        </FormControl>
                        
                        <Stack direction='row' spacing={2} >
                            <TextField
                                fullWidth
                                id="openDate"
                                label="Open Date"
                                type="date"
                                name='openDate'
                                InputLabelProps={{
                                shrink: true,
                                }}
                                value={formik.values.openDate}
                                onChange={formik.handleChange}
                                error={formik.touched.openDate && Boolean(formik.errors.openDate)}  
                                helperText={formik.touched.openDate && formik.errors.openDate}
                            />

                            <TextField
                                fullWidth
                                id="closeDate"
                                label="Close Date"
                                type="date"
                                name='closeDate'
                                InputLabelProps={{
                                shrink: true,
                                }}
                                value={formik.values.closeDate}
                                onChange={formik.handleChange}
                                error={formik.touched.closeDate && Boolean(formik.errors.closeDate)}  
                                helperText={formik.touched.closeDate && formik.errors.closeDate}
                            />
                        </Stack>

                        <Button startIcon={<AddIcon/>} size={'large'} color="primary" variant="contained"  type="submit">
                            Add
                        </Button>
                    </Stack>
                </Paper>
            </Container>
        </form>

        <Snackbar open={add.success} autoHideDuration={4000} onClose={handleClose}>
            <Alert variant='filled' severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                Shop added successfuly
            </Alert>
        </Snackbar>
        
    </Fragment>
  )
}

export default AddShop