import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import { Typography } from "@mui/material";
import { motion } from "framer-motion";

// Styled Paper component
const Item = styled(motion.div)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  display: "flex",
  justifyContent: "space-between",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function JobStack() {
  return (
    <Box
      sx={{
        width: "100%",
        mt: 5,
      }}
    >
      <Stack spacing={2}>
        <Item>
          <Box>
            <Typography variant="h5" sx={{ pt: { xs: 4 } }}>
              Buddy Telco
            </Typography>
            <Typography
              variant="body1"
              sx={{ pr: 10, pt: 2, display: { xs: "none", md: "block" } }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <Box>
            <img src="assets/buddytelco.png" />
          </Box>
        </Item>

        <Item>
          <Box>
            <Typography variant="h5" sx={{ pt: { xs: 4 } }}>
              Aussie Broadband
            </Typography>
            <Typography
              variant="body1"
              sx={{ pr: 10, pt: 2, display: { xs: "none", md: "block" } }}
            >
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </Typography>
          </Box>
          <Box>
            <img src="assets/aussiebroadband.png" />
          </Box>
        </Item>
      </Stack>
    </Box>
  );
}
