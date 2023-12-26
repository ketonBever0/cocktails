import { FeedbackType } from "@/types/FeedbackTypes";
import dateFormat from "dateformat";

export function FeedbackElement(feedback: FeedbackType) {


    return (
        <tr>
            <th>{dateFormat(feedback.createdAt, "dddd H:MM, mmmm dS, yyyy")}</th>
            <td>{feedback.title}</td>
            <td>{feedback.details}</td>
        </tr>
    )
}