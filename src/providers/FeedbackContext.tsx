"use client"

import { FeedbackType } from "@/types/FeedbackTypes";
// import { PrismaClient } from "@prisma/client";
import { createContext, useState } from "react"


const FeedbackContext = createContext<any | null>(null);

export const FeedbackProvider = ({ children }: any) => {

    // const prisma = new PrismaClient();

    const [feedbacks, setFeedbacks] = useState<Array<FeedbackType>>([]);
    const [feedbacksPending, setFeedbacksPending] = useState<boolean>(false);
    const [feedbacksRefresh, setFeedbacksRefresh] = useState<boolean>(false);



    return <FeedbackContext.Provider
        value={{
            feedbacks,
            feedbacksPending,
            
        }}>{children}</FeedbackContext.Provider>
}
export default FeedbackContext;