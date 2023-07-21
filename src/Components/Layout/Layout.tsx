import React from "react";

const styles: Record<string, React.CSSProperties> = {
    nav: {
        position: "fixed",
        top: 0,
        color: "white",
        zIndex: 1,
        width: "100vw",
        height: "40px",
        background: "rgba(255,255,255,.3)",
      },
}

interface iProps {
    children?: React.ReactNode
}

function Layout(props: iProps) {
  return (
    <>
      <div className="Nav" style={{...styles.nav}}>Navigation</div>
        {props.children}
    </>
  );
}

export default Layout;
