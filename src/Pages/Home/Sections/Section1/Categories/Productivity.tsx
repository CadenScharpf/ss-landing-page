import React, { useContext } from 'react'
import { LayoutContext } from '../../../../../App';
import officeImageLrg from "../assets/pexels-burst-374147.jpg";

function Productivity() {
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
    <>
        <div id="imgLarge" style={{ ...DEFAULT_STYLES.imgLarge }} />
          <div
            id="ContentLeft"
            className="Content"
            style={{...DEFAULT_STYLES.content }}
          >
            sdf
          </div>
          <div
            id="ContentRight"
            className="Content"
            style={{...DEFAULT_STYLES.content }}
          >
            sdf
          </div>
    </>
  )
}

export default Productivity