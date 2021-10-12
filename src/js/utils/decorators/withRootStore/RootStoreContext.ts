import { createContext } from "react";
import { RootStore } from "../../../stores/RootStore";

export const RootStoreContext = createContext(RootStore.instance);
/*
todo: ask
Если RootStore все равно не требует никаких параметров, и для работы приложения он
должен быть всегда создан, то почему мы не экспортируем сразу инстанс? А пробрасываем
через контекст?
И могу ли я как то сделать контекст с другими сторами?
 */
