import React, { useContext } from "react";
import { LayoutContext } from "../../../../../App";
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Productivity() {
  const lcp = useContext(LayoutContext);
  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {};
  return (
    <>
      {/* <div id="imgLarge" style={{ ...DEFAULT_STYLES.imgLarge }} /> */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0 } }}
          variant="h3"
          sx={{maxWidth: 480, width: "92%"}}
        >
          Enhance
          <br />
          new tab<br/>
          capabilities
        </Typography>


        <Button
          variant="outlined"
          component={motion.div}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}
          sx={{
            width: "auto",
            marginTop: 2,
            background: "grey",
            borderColor: "white",
            borderRadius: "25px",
            color: "white",
          }}
        >
          Now in Chrome Store
        </Button>
      </div>
    </>
  );
}

export default Productivity;
