import React, { useContext } from "react";
import { LayoutContext } from "../../../../../App";
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

function Promote() {
  const lcp = useContext(LayoutContext);
  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
    imgLarge: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      backgroundImage: `url(${officeImageLrg})`,
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "cen",
    },
    content: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        flexDirection: {
          xs: "column",
          md: "row",
          justifyContent: "center",
          alignItems: { xs: "flex-end", md: "center" },
          paddingBottom: "20px",
        },
      }}
    >
      <div
        id="ContentLeft"
        className="Content"
        style={{ ...DEFAULT_STYLES.content }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0 } }}
          variant="h3"
          sx={{...DEFAULT_STYLES.text, textAlign: 'right', paddingRight: {xs: 0, md: 10}, paddingBottom: {xs: 10, md: 0}}}

        >
          Promote your
          <br />
          Products
        </Typography>
      </div>
      <div
        id="ContentRight"
        className="Content"
        style={{ ...DEFAULT_STYLES.content }}
      >
        <Typography
          component={motion.h3}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0, transition: { duration: 1, delay: 1 } }}
          variant="h3"
          sx={{...DEFAULT_STYLES.text, textAlign: 'left'}}
        >
          Highlight specials
          <br />& discounts
        </Typography>
      </div>
    </Box>
  );
}

export default Promote;
