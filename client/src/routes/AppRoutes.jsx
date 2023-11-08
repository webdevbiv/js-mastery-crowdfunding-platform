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
        <Route
          path='/profile'
          element={<Profile />}
        />
        <Route
          path='/create-campaign'
          element={<CreateCampaign />}
        />
        <Route
          path='/campaign-details/:id'
          element={<CampaignDetails />}
        />
      </Routes>
    </>
  );
};

export default AppRoutes;
