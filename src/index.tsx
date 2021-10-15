/* ===================== add data to firebase START ===================== */
// import for adding items to database
import "./js/initFirebaseDataApi/initFirebaseCollectionsApi";
//temporary import for testing authentication
// import './js/initFirebaseDataApi/initFirebaseCollectionsApi'
/* ===================== add data to firebase END ===================== */

import "../node_modules/normalize.css/normalize.css";
import "./scss/main.module.scss";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "mobx-react";
import rootStore from "./js/stores";
import { App } from "./js/app/App";
import { RootStoreContext } from "./js/utils/decorators/withRootStore/RootStoreContext";
import { RootStore } from "./js/stores/rootStore";

// eslint-disable-next-line no-console
console.log("Started");

// get cart from local storage and then emb app to DOM
const cartStore = rootStore.cart;
cartStore.getCartFromLocalStorage();

ReactDom.render(
  <Provider rootStore={rootStore}>
    <RootStoreContext.Provider value={RootStore.instance}>
      <App />
    </RootStoreContext.Provider>
  </Provider>,
  document.querySelector("#app")
);
