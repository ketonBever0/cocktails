"use client"

import { FeedbackType } from "@/types/FeedbackTypes";
import axios, { AxiosResponse } from "axios";
import { createContext, useState } from "react"


const FeedbackContext = createContext<any | null>(null);

export const FeedbackProvider = ({ children }: any) => {

    const [feedbacks, setFeedbacks] = useState<Array<FeedbackType>>([]);
    const [feedbacksPending, setFeedbacksPending] = useState<boolean>(false);
    const [feedbacksRefresh, setFeedbacksRefresh] = useState<boolean>(false);

    const getFeedbacks = () => {
        setFeedbacksPending(true);
        axios.get(`${process.env.HOST}/api/feedback`, {
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res: AxiosResponse) => {
                if (res.status == 200) {
                    setFeedbacks(res.data);
                }
            })
            .catch((err) => console.log(err))
            .finally(() => {
                setFeedbacksPending(false);
            })
    }

    const feedbackUpdate = () => {
        setFeedbacksRefresh((prev: boolean) => (!prev));
    }



    return <FeedbackContext.Provider
        value={{
            getFeedbacks,
            feedbacks,
            feedbacksPending,
            feedbacksRefresh,
            feedbackUpdate
        }}>{children}</FeedbackContext.Provider>
}
export default FeedbackContext;