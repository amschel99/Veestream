import { Box, Button, styled, TextField, Typography } from "@mui/material";
import React from "react";
import { Widget } from '@typeform/embed-react'
import Freetrial from "../freetrial";
const HeroText = () => {
  const SearchButton = styled(Button)({
    border: "1px solid #5767aa",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    height: 40,
    cursor: "pointer",
    backgroundColor: "#29335c",
    fontWeight: 700,
    color: "white",
    "&:hover": {
      backgroundColor: "#5767aa",
      color: "#FBBC05",
    },
  });

  return (
    <Box
      sx={{
      
textAlign:"center",
        display: "flex",
        flexDirection: "column",
        marginTop: 4,
        // border: "2px solid pink",
        width: {xs: "100%", sm: "45%"},
        gap: 2,
        marginLeft: {xs: 0, sm: 6}
      }}
    >
      <Box sx={{ marginBottom: 2 }}>
        <Typography variant="h4" fontWeight={700}>
        Revolutionize Your File Management with <span style={{ color: "#FBBC05" }}>Veestream's All-In-One API Solution</span> 
        <br/>


        </Typography>
        <Typography variant="h6" sx={{color:"#29335c"}}> <span style={{ }}>Simplify file uploading, downloading, and management with Veestream's user-friendly API</span> </Typography>

      </Box>
      <Box sx={{ marginBottom: 2 }}>

      <Box
  display="flex"
  flexDirection={{ xs: 'column', md: 'row' }}
  alignItems="stretch"
  justifyContent="space-between"
>
  <Box
    flexGrow={1}
    p={{ xs: 2, md: 4 }}
    bgcolor="#FBBC05"
    color="#fff"
    borderRadius={16}
    boxShadow={3}
    sx={{marginX:{xs:"2%", sm:"0"}}}
    width={{ xs: '96%', md: '30rem' }}
    height={{ xs: 'auto', md: '36rem' }}
    mx={{ xs: 0, md: 2 }}
    my={{ xs: 2, md: 0 }}
  >
    <Typography variant="h4" gutterBottom>
      Simplify Your Workflow
    </Typography>
    <Typography variant="body1">
      Traditional file management can be complex and time-consuming. Veestream offers an all-in-one API solution that streamlines the entire process with just one API call. Eliminate the need for juggling multiple calls and save time and effort.
    </Typography>
  </Box>

  <Box
    flexGrow={1}
    p={{ xs: 2, md: 4 }}
    bgcolor="#5767aa"
    color="#fff"
    borderRadius={16}
    boxShadow={3}
    sx={{marginX:{xs:"2%", sm:"0"}}}
    width={{ xs: '96%', md: '70rem' }}
    
    height={{ xs: 'auto', md: '45rem' }}
    mx={{md: 2 }}
    my={{ xs: 2, md: 0 }}
  >
    <Typography variant="h4" gutterBottom>
      Create Standout Media Content
    </Typography>
    <Typography variant="body1">
      Veestream's advanced features, such as video thumbnail generation, enable web developers to create websites with standout media content that is sure to impress their audience. With Veestream, you can focus on creating value for your users rather than worrying about the underlying file management system.
    </Typography>
  </Box>

  <Box
    flexGrow={1}
    p={{ xs: 2, md: 4 }}
    bgcolor="#29335c"
    color="#fff"
    borderRadius={16}
    boxShadow={3}
    sx={{marginX:{xs:"2%", sm:"0"}}}
    width={{ xs: '96%', md: '35rem' }}
    height={{ xs: 'auto', md: '40rem' }}
    mx={{ xs: 0, md: 2 }}
    my={{ xs: 2, md: 0 }}
  >
    <Typography variant="h4" gutterBottom>
      Save Time
    </Typography>
    <Typography variant="body1">
      By using Veestream, developers can save time and effort by eliminating the need for building a file management system from the ground up. This ensures that the final product is of the highest quality.
    </Typography>
  </Box>
</Box>

<Freetrial/>
      </Box>
      <Box sx={{ display: "flex", marginTop: 4 , width:{xs:"100vw", sm:"40vw"}}}>
  <Widget id="NjMiq6cj" style={{ width: '80%', height: "80vh" }} className="my-form" />
</Box>

    </Box>
  );
};

export default HeroText;