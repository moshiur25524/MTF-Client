import React from "react";
import { Link, NavLink, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  let resolved = useResolvedPath(to);
  let match = useMatch({ path: resolved.pathname, end: true });
  //   let match = useMatch();
  return (
    <div>
      <NavLink
        // style={{ color: match ? "text-purple-400" : "text-black-400" }}
        // style={{ color: "text-red-500" }}
        className={match ? "text-white bg-green-500 p-2" : "text-black-400"}
        to={to}
        {...props}
      >
        {children}
      </NavLink>
    </div>
  );
};

export default CustomLink;
