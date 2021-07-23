import { Button } from "react-bootstrap"
import { removeUserToken } from "../../services/removeToken"
import "./header.css"

export const Header = () => {

    const logout = () => {
        removeUserToken()
        window.location.hash = "#/auth"
    }

    return(
        <div className="blog-header">
            <h2 className="blog-title">
                <a className="blog-link" href="/">The Alkemy Blog!</a>
            </h2>
            <div className="header-buttons">
                <Button className="header-button" onClick={ () => window.location.hash = "#/posts/create-post/"} variant="primary">
                    Create Post
                </Button>
                <Button className="header-button" onClick={ () => {logout()}} variant="primary">
                    Logout
                </Button>
            </div>
        </div>
    )
}