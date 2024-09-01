import {
  Button,
  Container,
  Typography,
  Box,
  Divider,
  Paper,
} from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import JobStack from "./JobStack";

const theme = createTheme({
  palette: {
    primary: {
      main: "#613dc1",
    },
    root: {
      height: "100%",
    },
  },
  typography: {
    fontFamily: ["Rubik"].join(","),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ pt: 8 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row", lg: "row" },
            textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
          }}
        >
          <Typography variant="h2">Hi! I'm Jordan!</Typography>

          <Button
            variant="contained"
            sx={{
              ml: { xs: 0, sm: 30, md: 70, lg: 70 },
              mt: { xs: 3, sm: 0, md: 0, lg: 0 },
            }}
          >
            Contact Me
          </Button>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "left",
              lg: "left",
            },
            m: 0,
          }}
        >
          <img src="assets/github.png" className="socials" />
          <img src="assets/linked.png" className="socials" />
        </Box>
        <Divider sx={{ m: 1 }}></Divider>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Typography variant="h5">Tech Stack</Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-around",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            mt: 2,
            gap: { xs: 1 },
          }}
        >
          <Paper
            elevation={15}
            sx={{ justifyContent: "center", textAlign: "center", p: 1 }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <img src="assets/react.png" />
            </Box>
            <Typography variant="body1">React</Typography>
          </Paper>

          <Paper
            elevation={15}
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <img src="assets/muilogo.png" />
            </Box>
            <Typography variant="body1">Material UI</Typography>
          </Paper>

          <Paper
            elevation={15}
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <img src="assets/firebaselogo.png" />
            </Box>
            <Typography variant="body1">Firebase</Typography>
          </Paper>

          <Paper
            elevation={15}
            sx={{ justifyContent: "center", textAlign: "center" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center", p: 2 }}>
              <img src="assets/rustlogo.png" />
            </Box>
            <Typography variant="body1" sx={{ pb: { xs: 3 } }}>
              Rust
            </Typography>
          </Paper>
        </Box>
        <br></br>
        <br></br>
        <Divider></Divider>
        <JobStack></JobStack>
      </Container>
    </ThemeProvider>
  );
}

export default App;
