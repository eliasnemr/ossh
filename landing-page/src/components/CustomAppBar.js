import { Toolbar, Box, Grid, Typography, Avatar, Link } from '@mui/material'
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
      {/* opacity: 0.8 on :hover */}
      <Toolbar sx={{ color: 'black', cursor: 'pointer' }}>
        <Grid container alignItems='center'>
          <Grid item xs={2} sx={{':hover': {opacity: 0.4}}} textAlign='right' onClick={() => navigate('/')}>
            <Box> <Typography> Home </Typography> </Box>
          </Grid>
          <Grid item xs={2} sx={{':hover': {opacity: 0.4}}} textAlign='right'>
            <Typography component={Link} color="textPrimary" underline="none"
              href='https://ossh-messenger.netlify.app/'
            > Chat 
            </Typography>
          </Grid>
          <Grid item xs={4} textAlign='center' onClick={() => navigate('/')}>
            <Box component='img' width='120px' height='auto' src='/assets/logo.png' alt='logo' />
          </Grid>
          <Grid item xs={2} textAlign='left'>
            <Typography>  </Typography>
          </Grid>
          <Grid item xs={2} textAlign='left' onClick={() => {
            if (!isLoggedIn) navigate('/signup')
          }}>
            {isLoggedIn
              ? <Grid container>
                  <Grid item xs={6}>
                    <Typography> Alexandros Yiangou </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Avatar />
                  </Grid>
                </Grid>
              : <Typography sx={{':hover': {opacity: 0.4}}}> Signup / Login </Typography>
            }
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  )
}
