import React from 'react';
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Typography } from '@material-ui/core';
import { ShoppingCart } from   '@material-ui/core';
import logo from '../../assets/commerce.jpg';
import useStyles from './style.js';

const Navbar = () => {
    const classes = useStyles(); 
  return (
    <>
    <AppBar position = "fixed" className = {classes.appBar} color="inherit">
        <Toolbar>
            <Typography variant= "h6" className={classes.title} color="inherit">
            <img src={logo} alt="Commerce.js" height="25px" className={classes.image} />
             Commerce.js
            </Typography>
            <div className={classes.grow} />
            <div className={classes.button}/>
            <IconButton aria-label="Show cart items" color="inherit">
                    <Badge badgeContent={2} color="secondary">
                    <ShoppingCart/>

                    </Badge>
            </IconButton>

        </Toolbar>
    </AppBar>
    Navbar
    </>
  )
}

export default Navbar