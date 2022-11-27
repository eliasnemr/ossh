import { Box, Grid, Typography } from "@mui/material";
import CustomAppBar from "../components/CustomAppBar";

export default function Homepage() {
  return (
    <Box>
      <CustomAppBar />
      <Grid container align="center">
        <Grid item xs={12}>
          <Box
            component="img"
            sx={{
              width: 0.9,
              height: "420px",
            }}
            src="/assets/home2.jpg"
            alt="image"
          />
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ marginTop: "16px" }}>
        {/* <Grid item xs={12}>
            <Typography variant='h3' align='center'> Doctor Features </Typography>
          </Grid> */}
        <Grid item xs={4}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  width: "100px",
                  height: "auto",
                }}
                src="/assets/icon.png"
                alt="icon"
              />
            </Grid>
            <Grid item>
              <Typography variant="body1"> Live Chat </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {" "}
                Chat directly to the doctor, no calls or delays{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  width: "100px",
                  height: "auto",
                }}
                src="/assets/icon.png"
                alt="icon"
              />
            </Grid>
            <Grid item>
              <Typography variant="body1"> Patient History </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {" "}
                View your full medical history{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4}>
          <Grid container direction="column" alignItems="center">
            <Grid item>
              <Box
                component="img"
                sx={{
                  width: "100px",
                  height: "auto",
                }}
                src="/assets/icon.png"
                alt="icon"
              />
            </Grid>
            <Grid item>
              <Typography variant="body1"> Book Appointment </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2">
                {" "}
                Book an appointment based on the availability of the doctor in
                real time{" "}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
