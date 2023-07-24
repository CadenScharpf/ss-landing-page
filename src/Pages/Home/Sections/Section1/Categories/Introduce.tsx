import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../App';
import { Box, Button, Typography } from '@mui/material';

function Introduce() {
    const lcp = useContext(LayoutContext);
    const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
        text:{maxWidth: 480, width: "92%", margin: '10px'}
    };
  return (
    <>
        <Box style={{display: "flex",flexDirection: 'column', height: "100%", justifyContent: 'center', alignItems: 'center', textAlign: 'left', marginLeft: 20}}>
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
            Introduce your<br/>products & services
            </Typography>
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
            Inform your<br/>customers while<br/>they wait
            </Typography>
        </Box>
    </>
  )
}

export default Introduce