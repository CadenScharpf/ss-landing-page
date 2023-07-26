import React, { useContext } from "react";
import { LayoutContext } from "../../../../../App";
import { Box, Button, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Introduce() {
  const lcp = useContext(LayoutContext);
  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
    text: { maxWidth: 480, width: "92%", margin: "10px" },
  };
  return (
    <>
      <Box
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "left",
          marginLeft: 20,
        }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0 } }}
          variant="h3"
          sx={DEFAULT_STYLES.text}
        >
          Introduce your
          <br />
          products & services
        </Typography>
        
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}
          variant="h3"
          sx={DEFAULT_STYLES.text}
        >
          Inform your
          <br />
          customers while
          <br />
          they wait
        </Typography>
      </Box>
    </>
  );
}

export default Introduce;
