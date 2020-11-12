import React from "react";
import {
  NextComponentType,
} from "next";
import {
  AppContext,
  AppInitialProps,
  AppProps,
} from "next/app";
import {
  Provider,
} from "react-redux";
import {
  store,
} from "src/modules";

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
}) => {
  return (
    <Provider store={store}>
      <Component />
    </Provider>
  );
};

export default App;
