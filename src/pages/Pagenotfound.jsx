/* import React from 'react'
import Layout from '../components/Layout/Layout'

const Pagenotfound = () => {
  return (
    <Layout>
      <h1>Page Not Found</h1>
    </Layout>
  )
}

export default Pagenotfound
 */


import React from "react";
import { NavLink } from "react-router-dom";
import Metapage from "../components/Layout/Metapage";

const Pagenotfound = () => {
  return (
    <Metapage title={"go back- page not found"}>
      <div className="pnf">
        <h1 className="pnf-title">404</h1>
        <h2 className="pnf-heading">Oops ! Page Not Found</h2>
        <NavLink to="/" className="pnf-btn">
          Go Back
        </NavLink>
      </div>
    </Metapage>
  );
};

export default Pagenotfound;
