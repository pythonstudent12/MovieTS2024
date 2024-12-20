import { Box, Typography } from "@mui/material";

const Loader = () => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography
        sx={{ fontFamily: "Open Sans" }}
        gutterBottom
        variant="h4"
        component="div"
      >
        LOADING...
      </Typography>
    </Box>
  );
};

export default Loader;
