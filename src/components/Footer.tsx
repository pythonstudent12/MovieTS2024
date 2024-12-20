import { Typography, Toolbar, AppBar } from "@mui/material";

const Footer = () => {
  return (
    <AppBar position="sticky" sx={{ paddingY: 2 }}>
      <Toolbar
        sx={{
          justifyContent: "space-around",
          color: "white",
          p: 2,
        }}
      >
        <Typography variant="h6" align="center" gutterBottom>
          MovieTS 2024
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
