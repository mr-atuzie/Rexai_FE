import React from "react";
import { Outlet } from "react-router-dom";

const DasboardLayout = () => {
  return (
    <div>
      <div>menu</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default DasboardLayout;
