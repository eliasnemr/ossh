import {
  Box, Grid, TableRow,
  TableCell, Button, TextField, FormControl,
  InputLabel, Select, MenuItem, Table, TableContainer, TableHead, TableBody
} from '@mui/material'
import Container from '@mui/material/Container'
import { useNavigate } from 'react-router'
import CustomAppBar from '../components/CustomAppBar'

export default function Homepage() {
  const navigate = useNavigate()
  return (
    <Container>
      <CustomAppBar />
      <Box
        component='img'
        sx={{
          width: 1,
          height: '500px',
          backgroundColor: 'red'
        }}
      />
      <Grid container direction='column' sx={{ backgroundColor: 'rgba(29,197,214,.1)' }} rowSpacing={2}>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={4}>
              <TextField fullWidth sx={{ backgroundColor: 'white' }}
                label='Name'
              />
            </Grid>
            <Grid item xs={4}>
              <TextField fullWidth sx={{ backgroundColor: 'white' }}
                label='Surame'
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth sx={{ backgroundColor: 'white' }}>
                <InputLabel id="location-select-label"> Location </InputLabel>
                <Select
                  labelId="location-select-label"
                  value={'Limassol'}
                  label="Tobacco Brand"
                // onChange={(event) => {
                //   setTobaccoBrand(event.target.value)
                //   setTobaccoBrandError('')
                // }}
                >
                  {['Nicosia', 'Limassol'].map((option) => (
                    <MenuItem key={option} value={option}> {option} </MenuItem>
                  ))}
                </Select>
              </FormControl>
              {/* <TextField fullWidth sx={{backgroundColor: 'white'}}
                label='Location (dropdown)'
              /> */}
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ backgroundColor: 'white' }}>
                <InputLabel id="category-select-label"> Location </InputLabel>
                <Select
                  labelId="category-select-label"
                  value={'GP'}
                  label="Category of service"
                // onChange={(event) => {
                //   setTobaccoBrand(event.target.value)
                //   setTobaccoBrandError('')
                // }}
                >
                  {['GP', 'Lab Analysis', '...'].map((option) => (
                    <MenuItem key={option} value={option}> {option} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ backgroundColor: 'white' }}>
                <InputLabel id="speciality-select-label"> Location </InputLabel>
                <Select
                  labelId="speciality-select-label"
                  value={'Orthopaedic'}
                  label="Speciality"
                // onChange={(event) => {
                //   setTobaccoBrand(event.target.value)
                //   setTobaccoBrandError('')
                // }}
                >
                  {['Orthopaedic', 'Neurologist', '...'].map((option) => (
                    <MenuItem key={option} value={option}> {option} </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={6}>
              <Button fullWidth variant='contained' color='warning'> Clear </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant='contained'> Search </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell> Full Name </TableCell>
              <TableCell> Location </TableCell>
              <TableCell> Speciality </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow onClick={() => navigate('/doctor')}>
              <TableCell> Kostis Kosti </TableCell>
              <TableCell> Limassol </TableCell>
              <TableCell> Heart Surgeon </TableCell>
            </TableRow>
            <TableRow onClick={() => navigate('/doctor')}>
              <TableCell> Maria Kostantinou </TableCell>
              <TableCell> Nicosia </TableCell>
              <TableCell> Orthopaedic </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  )
}
