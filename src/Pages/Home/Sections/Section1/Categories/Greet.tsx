import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../App';
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Box, Typography } from '@mui/material';

function Greet() {
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
          flexGrow: 1,
          width: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }
      };
  return (
    <Box sx={{width: '100%', display: 'flex', flexDirection: {xs: 'column', md: 'row'}, alignItems: 'flex-start', paddingTop: '40px'}}>
          <div
            id="ContentLeft"
            className="Content"
            style={{...DEFAULT_STYLES.content }}
          >
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
                
            Greet customers<br/>with a personal<br/>message
            </Typography>
          </div>
          <div
            id="ContentRight"
            className="Content"
            style={{...DEFAULT_STYLES.content }}
          >
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
              Show promo or<br/>meeting information
            </Typography>
          </div>
    </Box>
  )
}

export default Greet