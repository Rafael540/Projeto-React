/* eslint-disable @typescript-eslint/no-unsafe-function-type */

import { createContext } from "react";


export type ContextCartCountType = {
    contextCartCount: number;
    setcontextCartCount: (contextCartCount: number) => void;
}

export const ContextCartCount = createContext<ContextCartCountType>({
    contextCartCount: 0,
    setcontextCartCount: () => {}
})
