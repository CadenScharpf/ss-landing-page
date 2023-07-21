import { Route, Routes, createBrowserRouter, useLocation } from "react-router-dom";

import React from 'react'
import Layout from "../Layout/Layout";
import Home from "../../Pages/Home/Home";
import Page from "../../Pages/Page";
import About from "../../Pages/About/About";

function AnimatedRoutes() {
    const location = useLocation();
  return (
    <Layout>
        <Routes key={location.pathname} location={location}>
            <Route path="/" element={<Page/>}>
                <Route index element={<Home />} />
                <Route path="about" element={<About/>} />
            </Route>
        </Routes>
    </Layout>
  )
}

export default AnimatedRoutes