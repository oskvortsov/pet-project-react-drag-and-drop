import React from "react";
import { ThemeProvider } from "styled-components/macro";
import TouchBackend from "react-dnd-touch-backend";
import HTML5Backend from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import { isBrowser } from "react-device-detect";

import { backendOptions } from "./core/helpers/dnd-options";
import theme from "./core/theme";

import Layout from "./modules/Layout";
import MainContainer from "./modules/Main";

const App = () => {
  const renderLaylout = () => {
    if (isBrowser) {
      return (
        <DndProvider backend={HTML5Backend}>
          <Layout>
            <MainContainer />
          </Layout>
        </DndProvider>
      );
    }

    return (
      <DndProvider backend={TouchBackend} options={backendOptions}>
        <Layout>
          <MainContainer />
        </Layout>
      </DndProvider>
    );
  };

  return <ThemeProvider theme={theme}>{renderLaylout()}</ThemeProvider>;
};

export default App;
