"use client";

import AllFilters from "@/components/AllFilters";
import CocktailContext from "@/providers/CocktailContext";
import { Cocktail } from "@/types/CocktailTypes";
import Image from "next/image";
import { useContext, useEffect } from "react";
import { PropagateLoader } from "react-spinners";

export default function AllCocktails() {
  const {
    cocktails,
    cocktailsPending,
    selectedFilter
  } = useContext(CocktailContext);



  return (
    <div>
      {/* START: Disclaimer */}

      <div className="alert shadow-lg mb-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="stroke-info shrink-0 w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div>
          <h3 className="font-bold">Disclaimer</h3>
          <div className="text-xs">
            There is no way to list all of the Cocktails due to the limitations
            of the API.
            <br />
            You need to use the provided filters.
          </div>
        </div>
        {/* <button className="btn btn-sm">See</button> */}
      </div>

      {/* END: Disclaimer */}
      {/* START: Filters */}

      <AllFilters />

      {/* END: Filters */}
      {/* START: Listing */}

      <div className="mt-10">
        {cocktailsPending && (
          <div className="flex justify-center mt-20">
            <PropagateLoader
            size={25}
            color="#1fccde"
            />
          </div>
        )}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 3xl:grid-cols-4 gap-8">
          {!cocktailsPending &&
            cocktails.length != 0 &&
            cocktails
              .filter((x: Cocktail) => x.strCategory == (selectedFilter.category != "" ? selectedFilter.category : x.strCategory))
              .filter((x: Cocktail) => x.strGlass == (selectedFilter.glass != "" ? selectedFilter.glass : x.strGlass))
              .filter((x: Cocktail) => (
                selectedFilter.ingredient != "" ? (
                  selectedFilter.ingredient == x.strIngredient1 ||
                  selectedFilter.ingredient == x.strIngredient2 ||
                  selectedFilter.ingredient == x.strIngredient3 ||
                  selectedFilter.ingredient == x.strIngredient4 ||
                  selectedFilter.ingredient == x.strIngredient5 ||
                  selectedFilter.ingredient == x.strIngredient6 ||
                  selectedFilter.ingredient == x.strIngredient7 ||
                  selectedFilter.ingredient == x.strIngredient8 ||
                  selectedFilter.ingredient == x.strIngredient9 ||
                  selectedFilter.ingredient == x.strIngredient10 ||
                  selectedFilter.ingredient == x.strIngredient11 ||
                  selectedFilter.ingredient == x.strIngredient12 ||
                  selectedFilter.ingredient == x.strIngredient13 ||
                  selectedFilter.ingredient == x.strIngredient14 ||
                  selectedFilter.ingredient == x.strIngredient15
                ) : 1 == 1
              ))
              .filter((x: Cocktail) => x.strAlcoholic == (selectedFilter.alcoholic != "" ? selectedFilter.alcoholic : x.strAlcoholic))
              .map((cocktail: Cocktail, index: React.Key) => (
                <div className="card w-96 bg-base-100 shadow-xl" key={index}>
                  <figure>
                    <Image
                      src={cocktail.strDrinkThumb}
                      alt={`Picture of ${cocktail.strDrink}`}
                      width={250}
                      height={250}
                      className="mt-4 rounded-md"
                    />
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">
                      {cocktail.strDrink}
                      {cocktail.strAlcoholic == "Alcoholic" && <div className="badge badge-error cursor-default">{cocktail.strAlcoholic}</div>}
                      {cocktail.strAlcoholic == "Optional alcohol" && <div className="badge badge-warning cursor-default">{cocktail.strAlcoholic}</div>}
                    </h2>
                    <p className="mt-2 mb-4">{cocktail.strInstructions}</p>
                    <div className="card-actions justify-end">
                      <div className="badge badge-secondary cursor-default" title="Glass">{cocktail.strGlass}</div>
                      <div className="badge badge-outline cursor-default" title="Category">{cocktail.strCategory}</div>
                    </div>
                  </div>
                </div>
              ))}
        </div>
      </div>

      {/* END: Listing */}
    </div>
  );
}
