import { Box } from "@mui/material";
import React from "react";
import file_manager from "./images/file_manager.jpg"


const HeroImages = () => {
  return (
    <Box sx={{ display: "flex", marginTop: 2}}>
      <Box
        sx={{
         
          display: "flex",
          flexDirection: "column",
          gap: 1,
          marginTop: 9,
          marginLeft: {xs: 0, sm: 3},
          marginRight: {xs: 0, sm: 1},
        }}
      >
        <img src={file_manager} alt="SummerHouse" height="165" />
        <img src={file_manager} alt="SummerHouse" height="165" />
      </Box>
      <Box
        sx={{  display: "flex", flexDirection: "column", gap: 1, width: {xs: "100%", sm: "55%"} }}
      >
        <img src={file_manager} alt="SummerHouse" height="165" />
        <img src={file_manager} alt="SummerHouse" height="165" />
      </Box>
    </Box>
  );
};

export default HeroImages;