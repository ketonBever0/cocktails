"use client"

import CocktailContext from "@/providers/CocktailContext"
import { useContext, useEffect } from "react"
import Image from "next/image";
import MainFeelingLuckyBtn from "./MainFeelingLuckyBtn";

export default function MainRandomCocktailCard() {

    const { cocktail, cocktailPending } = useContext(CocktailContext);



    return (
        <>
            {cocktail &&
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure>
                        <Image
                            src={cocktail.strDrinkThumb}
                            alt={`Picture of ${cocktail.strDrink}`}
                            width={300}
                            height={300}
                            className="mt-4 rounded-md"
                        />
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            {cocktail.strDrink}
                            {cocktail.strAlcoholic == "Alcoholic" && <div className="badge badge-error cursor-default">{cocktail.strAlcoholic}</div>}
                            {cocktail.strAlcoholic == "Optional alcohol" && <div className="badge badge-warning cursor-default">{cocktail.strAlcoholic}</div>}
                        </h2>
                        <p>{cocktail.strInstructions}</p>
                        <div className="card-actions justify-end">
                            <div className="badge badge-secondary cursor-default" title="Glass">{cocktail.strGlass}</div>
                            <div className="badge badge-outline cursor-default" title="Category">{cocktail.strCategory}</div>
                            <br />
                            <div className="mt-4">
                                <MainFeelingLuckyBtn title="Again..." />
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    )
}