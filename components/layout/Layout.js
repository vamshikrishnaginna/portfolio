import React from "react";
import TopBar from "./components/TopBar";

const Layout = ({ children }) => {
  return (
    <div className={"flex flex-col h-screen"}>
      <TopBar />
      {children}
    </div>
  );
};

export default Layout;
