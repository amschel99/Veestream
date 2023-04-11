import { Box } from "@mui/material";
import React from "react";
import HeroText from "./hero_text";
import HeroImages from "./hero_images";


const Hero = () => {
  return (
    <Box
      sx={{
        display: "flex",
       
        width:"100%",
      marginBottom:'50px',


        flexDirection: { xs: "column", sm: "row" },
        marginTop: {xs: 2, sm: 6},
     
        justifyContent: "space-between"
      }}
    >
      <Box sx={{display:{xs:'block', sm:'none'}}}>
      <HeroImages />
      </Box>
      <HeroText />
      <Box sx={{display:{xs:'none', sm:'block'}, marginX:"5px"}}>
      <HeroImages />
      </Box>

    </Box>
  );
};

export default Hero;