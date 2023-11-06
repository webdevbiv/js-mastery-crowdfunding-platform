import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, Profile, CreateCampaign, CampaignDetails } from "../pages";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route
          path='/'
          element={<Home />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
