import axios from "axios"
const url = "https://jsonplaceholder.typicode.com/posts"

export const createPost = (title, body) => {
    return (axios.post(url, {
        data: {
            title: title,
            body, body,
            userId: 1
        },
        headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        }
    )
    .then( res => {
        let post = {
            title: res.data.data.title,
            body: res.data.data.body,
            userId: res.data.data.userId,
            id: res.data.id
        }
        return post
    })
    .catch( err => console.error(err)))
}