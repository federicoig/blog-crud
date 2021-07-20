import { Card } from "react-bootstrap"
import "./postContent.css"

export const PostContent = (props) => {
    let title = props.title
    let body = props.body

    return(
        <Card className="details-card">
        <Card.Header as="h2">{title}</Card.Header>
        <Card.Body>
            <Card.Text className="post-body">
                {body}
            </Card.Text>
        </Card.Body>
        </Card>        
    )
}