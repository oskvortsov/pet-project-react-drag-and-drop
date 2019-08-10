import React from "react";
import { ThemeProvider } from "styled-components/macro";
import TouchBackend from "react-dnd-touch-backend";
import { DndProvider } from "react-dnd";

import { backendOptions } from "./core/helpers/dnd-options";
import theme from "./core/theme";

import Layout from "./modules/Layout";
import MainContainer from "./modules/Main";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <DndProvider backend={TouchBackend} options={backendOptions}>
        <Layout>
          <MainContainer />
        </Layout>
      </DndProvider>
    </ThemeProvider>
  );
};

export default App;
