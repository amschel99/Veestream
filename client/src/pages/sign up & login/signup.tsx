import { Box } from "@mui/material";
import React from "react";

const SignUp = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        // backgroundColor: "yellow",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          boxShadow: 10,
          flexDirection: "column",
          height: "10vh",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <input type="text" />
          <input type="text" />
          <button>Sign Up</button>
        </Box>
        <Box>
          <button>
            Sign up with google
          </button>
          <button>
            Sign up with github
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
