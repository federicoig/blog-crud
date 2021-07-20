import React, { useState, useEffect } from "react"
import "./home.css"
import { isAuthenticated } from "../../services/isAuthenticated"
import { useHistory } from "react-router-dom"
import { Post } from "../../components/post/post"
import axios from "axios"


const url = "https://jsonplaceholder.typicode.com/posts"

export const Home = () => {
    const history = useHistory()
    let userHasToken = isAuthenticated()

    if(userHasToken === false){
        history.push("/auth")
    }

    const [posts, setPosts] = useState([])

    useEffect( () => {
        const getPosts = async () => {
            await axios.get(url)
            .then( res => setPosts(res.data))
            .catch( err => console.error(err))
        }
        getPosts()
    }, [])

    return (
        <div className="home-wrapper">
            {posts.slice(0,5).map( post => {
                return (
                    <Post 
                        key={post.id}
                        id={post.id}
                        title={post.title}
                        body={post.body}
                    />
                )
            })
            }
        </div>
    )
}