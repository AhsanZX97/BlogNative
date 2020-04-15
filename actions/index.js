import firebase from '../db'


export function getBlogs() {
    return (dispatch) => {
        firebase.database().ref('/blogs').on('value', snapshot => {
            dispatch({
                type:"BLOGS_FETCH",
                payload: snapcshot.val()
            })
        })
    }
}