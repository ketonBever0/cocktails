"use client"
import { CocktailProvider } from "@/providers/CocktailContext"
import { FeedbackProvider } from "@/providers/FeedbackContext"

export const Providers = ({ children }: any) => {
    return (
        <CocktailProvider>
            {/* <FeedbackProvider> */}


                {children}


            {/* </FeedbackProvider> */}
        </CocktailProvider>
    )
}