import { Box, Button, FormControl, FormHelperText, Grid2, Input, InputLabel, TextField } from "@mui/material";
import React from "react";
import Image from "next/image";
import logoCIP from "@/public/logo_CIP_PNG.png";

const LoginPage = () => {
  return (
    <>
      <Grid2 container spacing={0} direction="row" alignItems="center" justifyContent="center" sx={{ minHeight: "100vh" }}>
        <Image src={logoCIP} alt="as" width={200} height={200} className="hidden md:block mr-10" />
        <Box width={2} height={300} bgcolor={"black"} className="hidden md:block"></Box>
        <Box width={300} height={300} bgcolor={"white"} marginLeft={10} borderRadius={4}></Box>
      </Grid2>
    </>
  );
};

export default LoginPage;
