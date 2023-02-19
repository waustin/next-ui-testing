import React from "react";
import SideMenu from "../components/SideMenu/SideMenu.js";

function Copyright(props) {
  return (
    <p>
      Copyright © 
      {new Date().getFullYear()}
    </p>
  );
}

export default function Layout({ children }) {
  return (
    <>
      <SideMenu />
      <main className="page-container">{children}</main>
      <Copyright />
    </>
  );
}
