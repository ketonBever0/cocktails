"use client"
import { CocktailProvider } from "@/providers/CocktailContext"
import { FeedbackProvider } from "@/providers/FeedbackContext"
import { UIProvider } from "@/providers/UIContext"

export const Providers = ({ children }: any) => {
    return (
        <UIProvider>
            <CocktailProvider>
                <FeedbackProvider>

                    {children}


                </FeedbackProvider>
            </CocktailProvider>
        </UIProvider>
    )
}