"use client"

import UIContext from "@/providers/UIContext";
import { usePathname } from "next/navigation";
import { useContext, useEffect } from "react";

export default function Drawer({ children }: any) {


    const {
        drawerOpen,
        setDrawerOpen
    } = useContext(UIContext);

    const pathname = usePathname();

    useEffect(() => {
        drawerOpen && setDrawerOpen(false);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname])

    return (
        <div id="drawer" className={`fixed md:hidden right-0 top-16 bg-base-100 min-h-screen ${drawerOpen ? "w-2/3 animate-open-drawer" : "w-0"}`}>
            {children}
        </div>
    )
}