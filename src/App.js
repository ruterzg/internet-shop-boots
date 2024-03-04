import * as React from "react";
import { Box, Button, Card, IconButton, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
// import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import MediaCard from "./components/Card/MediaCard";

const headerStyles = {
  backgroundColor: "#000",
  color: "#fff",
  padding: "20px",
  textAlign: "center",
};

const App = () => {
  return (
    <Box className="Header" image="">
      <header style={headerStyles}>
        {/* <IconButton sx={{ color: "white" }} aria-label="menu">
          <NightlightRoundIcon />
        </IconButton> */}
        <Typography sx={{ ml: "8px", fontSize: "33px", mr: "42px" }}>
          RUTERZG
        </Typography>
        <IconButton size="large" sx={{ mr: "16px", color: "white" }}>
          <ArrowCircleLeftIcon sx={{ width: 30, height: 30 }} />
        </IconButton>
        <Button sx={{ color: "white" }}>Home</Button>
        <Button sx={{ color: "white" }}>About Us</Button>
        <Button sx={{ color: "white" }}>Information</Button>
        <Button sx={{ color: "white" }}>Contact</Button>
        <IconButton sx={{ color: "white" }} aria-label="person">
          <PersonIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="favorite">
          <FavoriteIcon />
        </IconButton>
        <IconButton sx={{ color: "white" }} aria-label="cart">
          <ShoppingCartIcon />
        </IconButton>
      </header>
      <Card />
      <MediaCard />
    </Box>
  );
};

export default App;
