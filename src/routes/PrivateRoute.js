import React from "react";
import PropTypes from "prop-types";

import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoute = ({ isAuthenticated }) => {
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};
PrivateRoute.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};
