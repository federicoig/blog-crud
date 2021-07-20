import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./post.css"

export const Post = (props) => {
    let title = props.title
    let id = props.id
    let post = props

    return(
        <Card>
            <Card.Header as="h4">{title}</Card.Header>
            <Card.Body>
                <Button variant="primary">
                    <Link 
                        className="button-link"
                        to={{
                            pathname: `/posts/${id}`,
                            state: { post }
                        }}
                    >
                        Details
                    </Link>
                </Button>
                <Button variant="secondary">Edit</Button>
                <Button variant="secondary">Delete</Button>
            </Card.Body>
        </Card>
    )
} 