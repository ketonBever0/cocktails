"use client";

import CocktailContext from "@/providers/CocktailContext";
import { useContext, useEffect } from "react";

export default function MainFeelingLuckyBtn({ title }: any) {

    const { getRandomCocktail, cocktail } = useContext(CocktailContext);


    useEffect(() => {
        const randomCard = document.getElementById("randomCard");
        cocktail && randomCard?.scrollIntoView({ behavior: "smooth" });
    }, [cocktail])


    return (
        <button onClick={async () => {
            await getRandomCocktail();

        }} className="btn btn-primary">
            {title}
        </button>
    )
}