import React from "react";
import TopBar from "./components/TopBar";

const Layout = ({ children }) => {
  return (
    <>
      <TopBar />
      {children}
    </>
  );
};

export default Layout;
