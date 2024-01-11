"use client"

import { createContext, useState } from "react";

const UIContext = createContext<any | null>(null);

export const UIProvider = ({ children }: any) => {

    const [drawerOpen, setDrawerOpen] = useState<boolean>(false);
    const [drawerClosing, setDrawerClosing] = useState(false);

    const toggleDrawer = () => {
        setDrawerOpen((prev: boolean) => (!prev));
    }


    const closeDrawer = () => {
        setDrawerClosing(true);
        setDrawerOpen(false);

        const timeoutId = setTimeout(
            () => {
                setDrawerClosing(false);
            }, 400
        );

        clearTimeout(timeoutId);

    }



    return <UIContext.Provider value={{
        drawerOpen,
        setDrawerOpen,
        toggleDrawer,
        closeDrawer,
        drawerClosing
    }}>{children}</UIContext.Provider>
}

export default UIContext;