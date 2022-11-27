import {
  Toolbar,
  Box,
  Grid,
  Typography,
  Avatar,
  Link,
  Stack,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import styles from "./CustomAppBar.module.css";

export default function CustomAppBar() {
  const navigate = useNavigate();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("login") === "true");
  }, [isLoggedIn]);

  return (
    <Box>
      {/* opacity: 0.8 on :hover */}
      <Toolbar sx={{ color: "black", cursor: "pointer" }}>
        <Grid container alignItems="center">
          <Grid item xs={2} textAlign="right" onClick={() => navigate("/")}>
            <Box className={styles["home__btn__wrapper"]}>
              {" "}
              <Typography variant="body1"> Home </Typography>{" "}
            </Box>
          </Grid>
          <Grid item xs={2} textAlign="right">
            <Box className={styles["home__btn__wrapper"]}>
              <Typography
                component={Link}
                color="textPrimary"
                underline="none"
                href="https://ossh-messenger.netlify.app/"
              ></Typography>
            </Box>
          </Grid>
          <Grid item xs={4} textAlign="center" onClick={() => navigate("/")}>
            <Box
              component="img"
              width="120px"
              height="auto"
              src="/assets/logo.png"
              alt="logo"
            />
          </Grid>
          <Grid item xs={2} textAlign="left">
            <Box className={styles["home__btn__wrapper"]}>
              <Typography
                component={Link}
                color="textPrimary"
                underline="none"
                href="https://ossh-messenger.netlify.app/"
              >
                Chat
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={2}
            textAlign="left"
            onClick={() => {
              if (!isLoggedIn) navigate("/signup");
            }}
          >
            {isLoggedIn ? (
              <Grid container>
                <Grid item xs={12}>
                  <Stack flexDirection="row" alignItems="center" gap="8px">
                    <Typography
                      variant="caption"
                      sx={{
                        color: "#16181c",
                        fontWeight: "700",
                        textAlign: "right",
                      }}
                    >
                      {" "}
                      Alexandros Yiangou{" "}
                    </Typography>
                    <Avatar sx={{ bgcolor: "#F57F90" }}>A</Avatar>
                  </Stack>
                </Grid>
              </Grid>
            ) : (
              <Box className={styles["home__btn__wrapper"]}>
                <Typography
                  component={Link}
                  color="textPrimary"
                  underline="none"
                  href="https://ossh.webdominar.com/html/login.php"
                >
                  Signup / Login
                </Typography>
              </Box>
            )}
            {/*  */}
          </Grid>
        </Grid>
      </Toolbar>
    </Box>
  );
}
