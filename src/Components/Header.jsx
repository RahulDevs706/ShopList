import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddIcon from '@mui/icons-material/Add';

const Header = () => {
    
  return (
    <AppBar position="sticky">
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <ShoppingCartIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', md: 'flex' },
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          SHoPSTeR
        </Typography>

        <ShoppingCartIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'flex', md: 'none' },
            flexGrow: 1,
            fontFamily: 'monospace',
            fontWeight: 700,
            letterSpacing: '.3rem',
            color: 'inherit',
            textDecoration: 'none',
          }}
        >
          SHoPSTeR
        </Typography>

        <Button startIcon={<AddIcon />} color='primary' align="right" variant={'contained'} href='/add'>
          Add Shop
        </Button>
       
      </Toolbar>
    </Container>
  </AppBar>
  )
}

export default Header