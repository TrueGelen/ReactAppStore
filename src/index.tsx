// for init firebase =====================
// import for adding items to database
import "./js/initFirebaseDataApi/initFirebaseCollectionsApi";
//temporary import for testing authentication
// import './js/initFirebaseDataApi/initFirebaseCollectionsApi'
// eslint-disable-next-line no-console
// for init firebase =====================
console.log("some", some)
import "../node_modules/normalize.css/normalize.css";
import scss from "./scss/main.module.scss";
import React from "react";
import ReactDom from "react-dom";
import { Provider } from "mobx-react";
import rootStore from "./js/stores";
import { App } from "./js/app/App";
import { RootStoreContext } from "./js/utils/decorators/withRootStore/RootStoreContext";
import { RootStore } from "./js/stores/rootStore";

console.log("Started");
//console.log(scss)

// get cart from local storage and then emb app to DOM
const cartStore = rootStore.cart;
cartStore.getCartFromLocalStorage();

ReactDom.render(
  <Provider rootStore={rootStore}>
    <RootStoreContext.Provider value={new RootStore()}>
      <App />
    </RootStoreContext.Provider>
  </Provider>,
  document.querySelector("#app")
);
