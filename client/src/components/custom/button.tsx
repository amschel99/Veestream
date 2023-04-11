import { Box, styled } from "@mui/material";

const CustomButton = styled(Box)({
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: "gold",
    fontWeight: 700,
    color: "black",
    width: "22%",
    "&:hover": {
      backgroundColor: "black",
      color: "white",
    },
});

export default CustomButton;