import {
  Toolbar, Box, Paper, Grid, Typography
} from '@mui/material'
import Container from '@mui/material/Container'

export default function Homepage() {
  return (
    <Container>
      <Box>
        <Toolbar sx={{ backgroundColor: 'blue' }}>

        </Toolbar>
      </Box>

      <Box
        component='img'
        sx={{
          width: 1,
          height: '500px',
          backgroundColor: 'green'
        }}
      />

      <Paper>
        <Grid container>
          <Grid item xs={12}>
            <Typography align='center'> Doctor Features </Typography>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction='column' alignItems='center'>
              <Grid item>
                <Typography> Feature 1 Title</Typography>
              </Grid>
              <Grid item>
                <Typography> Feature 1 Description</Typography>
              </Grid>
              <Grid item>
                <Box
                  component='img'
                  sx={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'green'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction='column' alignItems='center'>
            <Grid item>
                <Typography> Feature 2 Title</Typography>
              </Grid>
              <Grid item>
                <Typography> Feature 2 Description</Typography>
              </Grid>
              <Grid item>
                <Box
                  component='img'
                  sx={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'green'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={4}>
            <Grid container direction='column' alignItems='center'>
            <Grid item>
                <Typography> Feature 3 Title</Typography>
              </Grid>
              <Grid item>
                <Typography> Feature 3 Description</Typography>
              </Grid>
              <Grid item>
                <Box
                  component='img'
                  sx={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: 'green'
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}
