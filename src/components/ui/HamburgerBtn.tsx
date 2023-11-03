"use client"

import UIContext from "@/providers/UIContext";
import { useContext } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";

export default function HamburgerBtn() {

    const {
        drawerOpen,
        toggleDrawer
    } = useContext(UIContext);


    return (
        <button
            className="btn"
            onClick={() => { toggleDrawer() }}
        >
            {
                drawerOpen ?
                    <AiOutlineClose />
                    :
                    <GiHamburgerMenu />
            }
        </button>
    )
}