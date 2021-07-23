import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import { useHistory, useLocation } from "react-router-dom"
import store from "store-js"
import * as Yup from 'yup';
import { editPost } from "../../services/editPost";
import "./editPost.css"

const schema = Yup.object().shape({
    title: Yup.string().min(2, "Too short!").max(60, "Too long!").required("Title is required!"),
    body: Yup.string().min(2, "Too short!").required("Body is required!")
})

export const EditPost = () => {
    const history = useHistory()
    
    const { state } = useLocation();

    let initialValues = {
        title: state.post.title,
        body: state.post.body
    }

    return(
        <div className="edit-form-wrapper">
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={schema}
                onSubmit={values => {
                    editPost(values.title, values.body, state.post.id)
                        .then( updatedPost => {
                            let postList = store.get("posts")
                            let updatedPostList = postList.map( (post) => {
                                if (post.id === updatedPost.id){
                                    return post = updatedPost
                                }
                                else {
                                    return post
                                }
                            })
                            return updatedPostList
                        })
                        .then( (res) => {
                            store.set("posts", res)
                        })
                        .then( () => {
                            history.push("/home")
                        })
                }}
            >
                {({values, handleSubmit, handleChange, errors}) => 
                    <Form autoComplete="off" className="edit-form" noValidate onSubmit={handleSubmit}>
                        <Form.Group className="edit-form-group" controlId="formBasicTitle">
                            <Form.Label className="edit-form-text">Title</Form.Label>
                            <Form.Control 
                                name="title"
                                value={values.title}
                                onChange={handleChange}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className="edit-form-group" controlId="formBasicBody">
                            <Form.Label className="edit-form-text">Post Content</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={10}
                                name="body"
                                value={values.body}
                                onChange={handleChange}
                                isInvalid={!!errors.body}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.body}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="create-post-button" variant="primary" type="submit">
                            Edit
                        </Button>
                    </Form>
                }
            </Formik>
        </div>
    )
}