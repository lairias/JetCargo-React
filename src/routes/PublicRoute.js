import React from "react";
import PropTypes from "prop-types";

import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Navigate to="/admin" /> : <Outlet />;
};

PublicRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
