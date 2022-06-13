import { Alert, Avatar, Card, Fab, Snackbar, Stack, Typography } from '@mui/material'
import React, { Fragment } from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from 'react-redux';

const ShopCard = ({name, area, category, open, close, id}) => {
    const dispatch = useDispatch();
    const {delete:del} = useSelector(state=>state.shopState);

    const deleteShop=()=>{
        dispatch({
            type:'deleteShop',
            payload:id
        })
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
          return;
        }

        dispatch({
            type:'clearError'
        })
        
    };

  return (
    <Fragment>
        <Card sx={{ minWidth: 150, p:'2rem' }}>
            <Stack spacing={1}>
                <Stack sx={{
                        display: 'flex',
                        justifyContent:'space-between',
                        alignItems:"start"
                    }} direction='row' spacing={10}>
                    <Avatar sx={{ width: 75, height: 75 }}>{name[0]}</Avatar>
                    <Fab onClick={deleteShop} align='right' color="error" size='small' variant="string" ><DeleteIcon /></Fab>
                </Stack>
                <Typography variant="h5" gutterBottom component="h5">
                    Shop Name: {name}
                </Typography>
                <Typography variant="p" gutterBottom component="p">
                    Area: {area}
                </Typography>
                <Typography variant="p" gutterBottom component="p">
                    Category: {category}
                </Typography>
                    <Typography variant="p" gutterBottom component="p">
                        Opening Date: {open}
                    </Typography>
                    <Typography variant="p" gutterBottom component="p">
                        Closing Date: {close}
                    </Typography>
            </Stack>
        </Card>
        <Snackbar open={del.success} autoHideDuration={3000} onClose={handleClose}>
            <Alert variant='filled' severity="success" onClose={handleClose} sx={{ width: '100%' }}>
                Shop deleted successfuly
            </Alert>
        </Snackbar>
    </Fragment>
  )
}

export default ShopCard