import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../App';
import { Box, Button, Typography } from '@mui/material';

function Home() {
    const lcp = useContext(LayoutContext);
    const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
        text:{maxWidth: 480, width: "92%", margin: '10px'}
    };
  return (
    <>
        <Box style={{display: "flex",flexDirection: 'column', height: "100%", justifyContent: 'center', alignItems: 'center', textAlign: 'left', marginLeft: 10}}>
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
                Synchronize with<br/>family schedule
            </Typography>
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
            Recall photos & memories
            </Typography>
            <Typography variant="h3" sx={DEFAULT_STYLES.text}>
            Get up to date<br/>on digital frame
            </Typography>
        </Box>
    </>
  )
}

export default Home