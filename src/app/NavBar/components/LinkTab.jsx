import React from "react";
import PropTypes from "prop-types";
import { Tab } from "@mui/material";
import { Link } from "react-router-dom";

export const LinkTab = ({ pathname, ...props }) => {
    return <Tab component={Link} to={pathname} {...props} />;
};

LinkTab.propTypes = {
    pathname: PropTypes.string,
};
