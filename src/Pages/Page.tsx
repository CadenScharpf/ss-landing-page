import React from "react";
import { Outlet } from "react-router";

interface iProps {
  children?: React.ReactNode;
}

function Page(props: iProps) {
  return (
    <div
    className="Page"
      style={{
        width: "100%",
        height: "100vh",
        maxWidth: "1500px",
        background: "rgba(255,255,255,0)",
      }}
    >
      <Outlet />
    </div>
  );
}

export default Page;
