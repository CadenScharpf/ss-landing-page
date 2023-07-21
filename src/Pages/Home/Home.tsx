import React, { useContext } from "react";
import { LayoutContext } from "../../App";
import LandingSection1 from "./Sections/Section1/Section1";

const Home: React.FC = () => {
  const lcp = useContext(LayoutContext);

  const DEFAULT_STYLES: Record<string, React.CSSProperties> = {
    section: { height: "100%", width: "100%" },
    section1: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      height: `calc(100vh - ${lcp.navHeight}px)`,
      width: "100vw",
      paddingTop: `${lcp.navHeight}px`,
    },
    imgLarge: {
      position: "fixed",
      top: "0",
      left: "0",
      width: "100vw",
      height: "100vh",
      zIndex: -1,
      /* backgroundImage: `url(${officeImageLrg})`, */
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
    },
  };
  return (
    <>
      <div
        id="Section1"
        className="Section"
        style={{ ...DEFAULT_STYLES.section, ...DEFAULT_STYLES.section1 }}
      >
        <LandingSection1 />
      </div>
      <div
        id="Section2"
        className="Section"
        style={{ ...DEFAULT_STYLES.section, background: "black" }}
      >

      </div>
      <div
        className="Section"
        style={{ ...DEFAULT_STYLES.section, background: "blue" }}
      ></div>
    </>
  );
};

export default Home;
