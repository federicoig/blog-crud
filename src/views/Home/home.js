import React, { useState, useEffect } from "react"
import { Post } from "../../components/post/post"
import axios from "axios"
import store from "store-js"
import "./home.css"

const url = "https://jsonplaceholder.typicode.com/posts"

export const Home = () => {
    const [posts, setPosts] = useState([])

    const deletePost = (id) => {
        axios.delete(`${url}/${id}`)
            .then( res => {
                console.log(`Post #${id} has been deleted.`)
            })
            .then( () => {
                let updatedPosts = posts.filter( (post) => post.id !== id)
                store.set("posts", updatedPosts)
                return updatedPosts
            })
            .then( res => {
                setPosts(res)
            })
            .catch( err => console.error(err))
    }

    useEffect( () => {
        const getPosts = async () => {
            await axios.get(url)
                .then( res => {
                    let updatedPosts = res.data.slice(0,5)
                    setPosts(updatedPosts)
                    return updatedPosts
                })
                .then( (postList) => {
                    console.log("se setean!!!!!")
                    store.set("posts", postList)
                })
                .catch( err => console.error(err))
        }

        if(store.get("posts") === undefined){
            getPosts()
        }

        else {
            setPosts(store.get("posts"))
        }

    }, [])

    return (
        <div className="home-wrapper">
            {store.get("posts") !== "" ? posts.map( post => {
                return (
                        <Post 
                            key={post.id}
                            id={post.id}
                            title={post.title}
                            body={post.body}
                            deletePost={deletePost}
                        />
                    )
                }) : ""
            }
        </div>
    )
}