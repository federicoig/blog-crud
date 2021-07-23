import store from "store-js"

export const removeUserToken = () => {
    store.remove("token")
    return "Token deleted successfully."
}