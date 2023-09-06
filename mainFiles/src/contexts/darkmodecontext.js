import { createContext } from "react";

export const darkmodecontext = createContext({
    dark: false,
    setdark: () => { },
});