import { Card, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./post.css"

export const Post = (props) => {
    let title = props.title
    let id = props.id
    let post = props
    let deletePost = props.deletePost

    return(
        <Card>
            <Card.Header as="h4">{title}</Card.Header>
            <Card.Body>
                <Button className="post-button" variant="primary">
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
                <Button className="post-button" variant="secondary">
                    <Link
                        className="button-link"
                        to={{
                            pathname: `/posts/edit-post/${id}`,
                            state: { post }
                        }}
                    >
                        Edit
                    </Link>
                </Button>
                <Button 
                    className="post-button" 
                    variant="secondary"
                    onClick={ () => {deletePost(id)}}
                >
                    Delete
                </Button>
            </Card.Body>
        </Card>
    )
} 