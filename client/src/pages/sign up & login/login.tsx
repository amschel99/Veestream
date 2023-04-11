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
          <button>Login</button>
        </Box>
        <Box>
          <button>
            Login with google
          </button>
          <button>
            Login with github
          </button>
        </Box>
      </Box>
    </Box>
  );
};

export default SignUp;
