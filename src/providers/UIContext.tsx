"use client"

import { createContext, useState } from "react";

const UIContext = createContext<any | null>(null);

export const UIProvider = ({ children }: any) => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev: boolean) => (!prev));
    }




    return <UIContext.Provider value={{
        drawerOpen,
        setDrawerOpen,
        toggleDrawer
    }}>{children}</UIContext.Provider>
}

export default UIContext;