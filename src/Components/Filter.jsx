import { Accordion, AccordionDetails, AccordionSummary, Button, Container, FormControl, FormControlLabel, Radio, RadioGroup, Stack, SwipeableDrawer, Typography } from '@mui/material';
import React, { Fragment, useState } from 'react'
import {useDispatch} from "react-redux"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"

const Filter = ({open, setOpen}) => {
    const dispatch = useDispatch();


    const toggleDrawer = (action)=>{
        setOpen(action)
    }

    const [filterState, setFilterState] = useState({
        area:"",
        category:"",
        status:""
    });

    const {area, category, status} = filterState;

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
    
    const handleClick = (e)=>{
        e.preventDefault();
        if(area==="" && category==="" && status==="" ){
            return;
        }
        dispatch({
            type:"filter",
            payload:filterState
        })
        setOpen(false)
    }

    const handleChange = (e)=>{
        const {value, name}= e.target;
        setFilterState({...filterState, [name]:value})
    }

    const ClearFilters = ()=>{
        setFilterState({
            area:"",
            category:"",
            status:""
        })

        dispatch({
            type:"getList"
        })
    }

  return (
    <Fragment>
        <Container sx={{p:'1rem',display: { xs: 'none', md: 'flex' }, flexDirection:{ xs: 'none', md: 'column' }}}  position="fixed">
        <Typography variant='h5' align='center'  component='div' sx={{m:'2rem'}}>Filters</Typography>
            <Stack spacing={0}>
                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Area</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                name="area"
                                value={filterState.area}
                                onChange={handleChange}
                            >
                                {areas.map(area=>(
                                    <FormControlLabel key={area} value={area} control={<Radio />} label={area} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Category</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                name="category"
                                value={filterState.category}
                                onChange={handleChange}
                            >
                                {categories.map(category=>(
                                    <FormControlLabel key={category} value={category} control={<Radio />} label={category} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>

                <Accordion>
                    <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                    >
                    <Typography>Status</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <FormControl>
                            <RadioGroup
                                name="status"
                                value={filterState.status}
                                onChange={handleChange}
                            >
                                <FormControlLabel value="open" control={<Radio />} label='Open' />
                                <FormControlLabel value="close" control={<Radio />} label='Close' />
                            </RadioGroup>
                        </FormControl>
                    </AccordionDetails>
                </Accordion>

                <Button variant='contained' sx={{mt:'1rem'}} onClick={handleClick}>
                    Filter
                </Button>
                <Button color='error' variant='contained' sx={{mt:'1rem'}} onClick={ClearFilters}>
                    Clear Filters
                </Button>
            </Stack>
        </Container>

        <SwipeableDrawer
            anchor={'right'}
            open={open}
            onClose={()=>toggleDrawer( false)}
            onOpen={()=>toggleDrawer( true)}
          >
            <Container sx={{p:'1rem',display: { xs: 'block', md: 'none' }}}>
                <Typography variant='h5' align='center'  component='div' sx={{m:'2rem'}}>Filters</Typography>
                    <Stack spacing={0}>
                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Area</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        name="area"
                                        value={filterState.area}
                                        onChange={handleChange}
                                    >
                                        {areas.map(area=>(
                                            <FormControlLabel key={area} value={area} control={<Radio />} label={area} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Category</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        name="category"
                                        value={filterState.category}
                                        onChange={handleChange}
                                    >
                                        {categories.map(category=>(
                                            <FormControlLabel key={category} value={category} control={<Radio />} label={category} />
                                        ))}
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>Status</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <FormControl>
                                    <RadioGroup
                                        name="status"
                                        value={filterState.status}
                                        onChange={handleChange}
                                    >
                                        <FormControlLabel value="open" control={<Radio />} label='Open' />
                                        <FormControlLabel value="close" control={<Radio />} label='Close' />
                                    </RadioGroup>
                                </FormControl>
                            </AccordionDetails>
                        </Accordion>

                        <Button variant='contained' sx={{mt:'1rem'}} onClick={handleClick}>
                            Filter
                        </Button>
                        <Button color='error' variant='contained' sx={{mt:'1rem'}} onClick={ClearFilters}>
                            Clear Filters
                        </Button>
                    </Stack>
            </Container>

          </SwipeableDrawer>
    </Fragment>
  )
}

export default Filter