import React from "react";
import { Link } from 'react-router-dom';

import "./Breadcrumbs.css";

export const BreadcrumbItem = ({ name, current, href }) => {
  return (
    <li className="li">
      {href ? <Link className="breadCr" to={href}>{name}</Link>
        : <a className="breadCr">{name}</a>
      }
    </li>
  )
};

export const Breadcrumb = ({ title, children }) => {
  return (
    <div className="breadcrumb">
      <div className="container">
        <h2> {title}</h2>
        <ul>{children}</ul>
      </div>
    </div>
  );
};
