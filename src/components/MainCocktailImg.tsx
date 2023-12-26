"use client";

import CocktailContext from "@/providers/CocktailContext";
import { useContext, useEffect } from "react";
import Image from "next/image";
import { BounceLoader } from "react-spinners";

export default function MainCocktailImg() {


    const { heroCocktail, heroCocktailPending, getHeroCocktail } =
        useContext(CocktailContext);

    useEffect(() => {
        if (heroCocktail == null) {
            getHeroCocktail();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <>
            {!heroCocktail && (
                <div className="mb-20">
                    <BounceLoader 
                    color="#1fccde"
                    />
                </div>
            )}
            {heroCocktail && (
                <Image
                    src={heroCocktail && !heroCocktailPending && heroCocktail.strDrinkThumb}
                    priority={false}
                    width={250}
                    height={400}
                    className="max-w-sm h-auto w-auto rounded-lg shadow-2xl mb-4"
                    alt={""}
                />
            )}
        </>
    )
}