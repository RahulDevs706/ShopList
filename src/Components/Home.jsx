import { Divider, Fab, Grid, Typography } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Filter from './Filter';
import ShopCard from './ShopCard';
import FilterListIcon from '@mui/icons-material/FilterList';

const Home = () => {
    const {list: shops} = useSelector(state=>state.shopState);

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type:'getList'
        })
    }, [dispatch]);

  return (
    <Fragment>

        <Grid container>
            <Grid  item xs={0} md={2}>
                <Filter open={open} setOpen={setOpen} />
            </Grid>
            <Divider orientation='vertical' flexItem />
            

            <Grid item xs={12} md={9.5}>
                <Typography variant="h4" component="div" align='center' sx={
                    {
                        m:'2rem',
                        display: { xs: 'flex', md: 'block' },
                        justifyContent:'space-between',
                        alignItems:"center"
                    }
                }>
                    Available Shops
                    <Fab size="large" color="primary" aria-label="Filter" onClick={()=>setOpen(true)} sx={{ display: { xs: 'flex', md: 'none' }}}>
                        <FilterListIcon/> 
                    </Fab>
                </Typography> 
                {shops.length!==0? (<Grid sx={{p:'3rem', pt:0}} container spacing={3}>
                {shops?.map(shop=>(
                    <Grid key={shop._id} item xs={12} md={6} lg={4}>
                        <ShopCard 
                            id={shop._id}
                            name={shop.name} 
                            area={shop.area}
                            category={shop.category}
                            open={shop.openDate}
                            close={shop.closeDate}
                        />
                    </Grid>
                ))}
                </Grid>): <Typography variant="h6" component="div" align='center' sx={{
                    display:'flex', justifyContent:'center', alignItems:'center', height:'100vh'
                }} >No shops available till now...!<br/> Click on Add shop to add one</Typography> }

            </Grid>
        </Grid>
    </Fragment>
  )
}

export default Home