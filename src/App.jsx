import React, { useEffect } from "react";
import { RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import Layout from "./Layout";
import { routerAll } from "./router";
import { registerSW } from "virtual:pwa-register";

function App() {
  useEffect(() => {
    const updateSW = registerSW({
      onNeedRefresh() {
        // Show a prompt to the user to reload the page
        if (confirm("New content is available. Would you like to refresh?")) {
          updateSW(true);
        }
      },
      onOfflineReady() {
        console.log("App is ready to work offline");
      },
    });
  }, []);

  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routerAll}>
          <Layout />
        </RouterProvider>
      </Provider>
    </>
  );
}

export default App;
