import hoistNonReactStatics from "hoist-non-react-statics";
import React from "react";
import { RootStore } from "../../../stores/rootStore";
import { TPropInjector } from "../PropInjector";
import { useRootStore } from "./useRootStore";

export interface IWithRootStoreProps {
  rootStore: RootStore;
}

export const withRootStore: TPropInjector<IWithRootStoreProps> = (Component: any) => {
  const WrappedComponent = (props: any) => <Component {...props} localization={useRootStore()} />;

  return hoistNonReactStatics(WrappedComponent, Component);
};
