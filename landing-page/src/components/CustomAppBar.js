import { Toolbar, Box, Grid, Typography, Avatar } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

export default function CustomAppBar() {
  const navigate = useNavigate()

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem('login') === 'true')
  }, [isLoggedIn])

  return (
    <Box>
      <Toolbar sx={{ backgroundColor: 'blue' }}>
        <Grid container alignItems='center'>
          <Grid item xs={2} textAlign='right' onClick={() => navigate('/')}>
            <Typography> Home </Typography>
          </Grid>
          <Grid item xs={2} textAlign='right' onClick={() => navigate('/chat')}>
            <Typography> Chat </Typography>
          </Grid>
          <Grid item xs={4} textAlign='center' onClick={() => navigate('/')}>
            <Typography> OSSH </Typography>
          </Grid>
          {/* <Grid item xs={2} textAlign='center' onClick={() => navigate('/appointment')}>
            <Typography> Appointment </Typography>
          </Grid> */}
          <Grid item xs={2} textAlign='left' onClick={() => navigate('/help')}>
            <Typography> Help </Typography>
          </Grid>
          <Grid item xs={2} textAlign='left' onClick={() => navigate('/signup')}>
            {isLoggedIn ? <Avatar /> : <Typography> Signup / Login </Typography>}
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  )
}
