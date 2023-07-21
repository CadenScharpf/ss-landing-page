import React, { createContext } from "react";
import "./App.css";
import { Box, SxProps } from "@mui/material";
import Page from "./Pages/Page";
import Home from "./Pages/Home/Home";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes/AnimatedRoutes";

const styles: Record<string, React.CSSProperties> = {
  app: {
    textAlign: "center",
    background: "black",
    width: "100vw",
    height: "100vh",
    position: "absolute",
    zIndex: 2,
  },
  nav: {
    position: "fixed",
    top: 0,
    color: "white",
    zIndex: 1,
    width: "100vw",
    height: "40px",
    background: "rgba(255,255,255,.3)",
  },
  section: { height: "100vh", width: "100vw" },
  imgLarge: {},
};

const defaultLayoutParams = {
  isDarkMode: false,
  navHeight: 40,
};

export const LayoutContext = createContext(defaultLayoutParams);

function App() {
  return (
    <LayoutContext.Provider value={defaultLayoutParams}>
      <div className="App" style={styles.app}>
        <header className="App-header">
          <BrowserRouter>
            <AnimatedRoutes/>
          </BrowserRouter>
        </header>
      </div>
    </LayoutContext.Provider>
  );
}

export default App;
