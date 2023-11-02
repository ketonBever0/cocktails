import { FeedbackType } from "@/types/FeedbackTypes";

export function FeedbackElement(feedback: FeedbackType) {


    return (
        <tr>
            <th>{feedback.createdAt}</th>
            <td>{feedback.title}</td>
            <td>{feedback.details}</td>
        </tr>
    )
}