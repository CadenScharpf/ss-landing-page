import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../App';
import officeImageLrg from "../assets/pexels-burst-374147.jpg";
import { Button, Typography } from '@mui/material';

function Productivity() {
    const lcp = useContext(LayoutContext);
    const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
        
      };
  return (
    <>
        {/* <div id="imgLarge" style={{ ...DEFAULT_STYLES.imgLarge }} /> */}
        <div style={{display: "flex",flexDirection: 'column', height: "100%", justifyContent: 'center', alignItems: 'center'}}>

 
            <Typography variant="h3" sx={{maxWidth: 480, width: "92%"}}>
                Enhance<br/>new tab capabilities
            </Typography>
            <Button variant="outlined" sx={{width: "auto",marginTop: 2, background: 'grey', borderColor: 'white', borderRadius: '25px', color: 'white'}}>
                Now in Chrome Store
            </Button>
        </div>
    </>
  )
}

export default Productivity