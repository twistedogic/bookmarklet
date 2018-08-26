import React from "react";
import PropTypes from "prop-types";
import { Layout } from "./Layout";
import Header from "./Header";
import Main from "./Main";

const App = ({ bookmarklets }) => (
  <Layout>
    <Header heading="Bookmarklet" />
    <Main bookmarklets={bookmarklets} />
  </Layout>
);

App.propTypes = {
  bookmarklets: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default App;
