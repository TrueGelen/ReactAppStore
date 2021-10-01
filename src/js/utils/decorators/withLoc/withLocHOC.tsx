import React from "react";
import hoistNonReactStatics from "hoist-non-react-statics";
import { Localization } from "../../Localization/Localization";
import { TPropInjector } from "../PropInjector";
import { useLocalization } from "./useLocalization";

export interface IWithLocProps {
  localization: Localization;
}

export const withLoc: TPropInjector<IWithLocProps> = (Component: any) => {
  const WrappedComponent = (props: any) => <Component {...props} localization={useLocalization()} />;

  return hoistNonReactStatics(WrappedComponent, Component);
};
