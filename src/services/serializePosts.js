export const serializePosts = (post, postList) => {
    post.id = postList.length + 1
    return post
}