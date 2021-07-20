import { PostContent } from "../../components/postContent/postContent"
import { useLocation } from "react-router-dom";
import "./details.css"

export const Details = () => {
    const { state } = useLocation();

    return(
        <div className="details-wrapper">
            <PostContent 
                title={state.post.title}
                body={state.post.body}
            />
        </div>
    )
}