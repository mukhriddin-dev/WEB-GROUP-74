import React, { useContext } from "react";
import { Outlet, useNavigate, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { context } from "../context";
const Private = () => {
  const { auth } = useContext(context);
console.log(auth)
  return (
    <>
      {auth ? (
        <>
          <Navbar />
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Private;
