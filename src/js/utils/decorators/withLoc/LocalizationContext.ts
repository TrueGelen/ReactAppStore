import { createContext } from "react";
import { Localization } from "../../Localization/Localization";

export const LocalizationContext = createContext<Localization>(new Localization("en"));
