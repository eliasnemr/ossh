import {
  Box,
  Grid,
  TableRow,
  TableCell,
  Button,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Table,
  TableContainer,
  TableHead,
  TableBody,
} from "@mui/material";
import { map, find, filter, split, has, isEmpty } from "lodash";
import { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router";
import CustomAppBar from "../components/CustomAppBar";

const locationsList = [
  "All",
  "Famagusta",
  "Larnaca",
  "Limassol",
  "Nicosia",
  "Paphos",
];
const servicesList = ["All", "GP", "Specialist", "Laboratory", "Pharmacy"];
const specialitiesList = {
  GP: { key: "GP", list: ["All", "GP - Adults", "GP - Kids"] },
  Specialist: {
    key: "Specialist",
    list: ["All", "Cardiologist", "Orthopaedic", "..."],
  },
  Laboratory: {
    key: "Laboratory",
    list: ["All", "Biochemistry", "Hematology", "Microbiology", "..."],
  },
};

const doctorsList = [
  {
    name: "Alexandros",
    surname: "Alexandrou",
    location: "Limassol",
    speciality: "Cardiologist",
  },
  {
    name: "Andreas",
    surname: "Andreou",
    location: "Nicosia",
    speciality: "Orthopaedic",
  },
  {
    name: "Charalambos",
    surname: "Charalambou",
    location: "Paphos",
    speciality: "Cardiologist",
  },
  {
    name: "Elias",
    surname: "Elia",
    location: "Nicosia",
    speciality: "Cardiologist",
  },
];

export default function Homepage() {
  const navigate = useNavigate();

  const [nameValue, setNameValue] = useState("");
  const [surnameValue, setSurnameValue] = useState("");
  const [locationValue, setLocationValue] = useState("All");
  const [serviceValue, setServiceValue] = useState("All");
  const [specialityValue, setSpecialityValue] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const hasSpecialityList = Boolean(
    find(specialitiesList, { key: serviceValue })
  );

  const doSearch = () => {
    let filteredList = doctorsList;

    if (nameValue !== "")
      filteredList = filter(filteredList, { name: nameValue });
    if (surnameValue !== "")
      filteredList = filter(filteredList, { surname: surnameValue });
    if (locationValue !== "All")
      filteredList = filter(filteredList, { location: locationValue });
    if (specialityValue !== "")
      filteredList = filter(filteredList, { speciality: specialityValue });

    setSearchResult(filteredList);
  };

  const location = useLocation();

  useEffect(() => {
    const params = {};
    const query = location.search.substring(1);
    const pairs = query ? split(query, "&") : "";

    for (let i = 0; i < pairs.length; i++) {
      const pair = split(pairs[i], "=");
      params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || "");
    }

    if (
      localStorage.getItem("login") === "true" &&
      has(params, "login") &&
      params.login === "1"
    ) {
      return;
    } else if (isEmpty(params)) {
      return;
    } else {
      localStorage.setItem("login", params.login === "1");
    }
  }, [location.search]);

  return (
    <Box>
      <CustomAppBar />
      <Grid container align="center">
        <Grid item xs={12}>
          <Box
            component="img"
            sx={{
              width: "100%",
              height: "500px",
            }}
            src="/assets/home2.jpg"
            alt="image"
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="column"
        sx={{ padding: "32px" }}
        rowSpacing={2}
      >
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={4}>
              <TextField
                fullWidth
                sx={{ backgroundColor: "white" }}
                label="Name"
                onChange={(event) => setNameValue(event.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                fullWidth
                sx={{ backgroundColor: "white" }}
                label="Surame"
                onChange={(event) => setSurnameValue(event.target.value)}
              />
            </Grid>
            <Grid item xs={4}>
              <FormControl fullWidth sx={{ backgroundColor: "white" }}>
                <InputLabel id="location-select-label"> Location </InputLabel>
                <Select
                  labelId="location-select-label"
                  value={locationValue}
                  label="Location"
                  onChange={(event) => {
                    setLocationValue(event.target.value);
                    // setTobaccoBrandError('')
                  }}
                >
                  {locationsList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {" "}
                      {option}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={6}>
              <FormControl fullWidth sx={{ backgroundColor: "white" }}>
                <InputLabel id="category-select-label"> Service </InputLabel>
                <Select
                  labelId="category-select-label"
                  value={serviceValue}
                  label="Service"
                  onChange={(event) => {
                    setServiceValue(event.target.value);
                  }}
                >
                  {servicesList.map((option) => (
                    <MenuItem key={option} value={option}>
                      {" "}
                      {option}{" "}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={6}>
              <FormControl
                fullWidth
                f
                sx={{ backgroundColor: "white" }}
                disabled={!hasSpecialityList}
              >
                <InputLabel id="speciality-select-label">
                  {" "}
                  Speciality{" "}
                </InputLabel>
                <Select
                  labelId="speciality-select-label"
                  value={specialityValue}
                  label="Speciality"
                  onChange={(event) => {
                    setSpecialityValue(event.target.value);
                  }}
                >
                  {find(specialitiesList, { key: serviceValue })
                    ? map(specialitiesList[serviceValue].list, (option) => (
                        <MenuItem key={option} value={option}>
                          {" "}
                          {option}{" "}
                        </MenuItem>
                      ))
                    : null}
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <Grid container columnSpacing={4}>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#153D72", textTransform: "none" }}
              >
                {" "}
                Clear{" "}
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                fullWidth
                variant="contained"
                sx={{ backgroundColor: "#153D72", textTransform: "none" }}
                onClick={() => doSearch()}
              >
                {" "}
                Search{" "}
              </Button>
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
            {searchResult.map((option) => (
              <TableRow onClick={() => navigate("/doctor")}>
                <TableCell> {option.name + " " + option.surname} </TableCell>
                <TableCell> {option.location} </TableCell>
                <TableCell> {option.speciality} </TableCell>
              </TableRow>
            ))}
            {/* <TableRow onClick={() => navigate('/doctor')}>
              <TableCell> Kostis Kosti </TableCell>
              <TableCell> Limassol </TableCell>
              <TableCell> Heart Surgeon </TableCell>
            </TableRow>
            <TableRow onClick={() => navigate('/doctor')}>
              <TableCell> Maria Kostantinou </TableCell>
              <TableCell> Nicosia </TableCell>
              <TableCell> Orthopaedic </TableCell>
            </TableRow> */}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
