import store from "store-js"

export const isAuthenticated = () => {
    
    if (store.get("token") == null) {
        return false
    }
    
    else {
        return true
    }
}