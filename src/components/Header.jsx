import React from 'react';
import {TextField, Button} from '@mui/material';
import {Link} from 'react-router-dom'; 

const Header = () => {
  return (
    <div className='header'>
      <header>
        <div className="logo">
        <Link to='/'>
        <h1>LOGO</h1>
        </Link>
        </div>
        <div className="search">
        <TextField id="standard-basic" label="search" variant="standard" />
        </div>
        <div className="theme">
        <Button variant="outlined">search</Button>
        </div>
      </header>
        <div className='links'>
            <Link to='/search'>tous </Link>
            <Link to='/imagessearch'>images </Link>
        </div>
    </div>
  )
}

export default Header