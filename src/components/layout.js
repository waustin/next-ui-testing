import React from "react";

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
      <main>{children}</main>
      <Copyright/>
    </>
  );
}
