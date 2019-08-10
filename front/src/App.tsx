import React from "react";
import { ThemeProvider } from "styled-components/macro";

import theme from "./core/theme";

import Layout from "./modules/Layout";
import MainContainer from "./modules/Main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <MainContainer />
      </Layout>
    </ThemeProvider>
  );
};

export default App;
