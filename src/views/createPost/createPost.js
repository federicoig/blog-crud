import { Formik } from "formik";
import * as Yup from 'yup';
import { Form, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom"
import store from "store-js"
import { createPost } from "../../services/createPost.js";
import "./createPost.css"
import { serializePosts } from "../../services/serializePosts.js";

const schema = Yup.object().shape({
    title: Yup.string().min(2, "Too short!").max(60, "Too long!").required("Title is required!"),
    body: Yup.string().min(2, "Too short!").required("Body is required!")
})

export const CreatePost = () => {
    const history = useHistory()

    return(
        <div className="create-form-wrapper">
            <Formik
                validationSchema={schema}
                initialValues={{
                    title: "",
                    body: "",
                }}
                onSubmit={ values => {
                    createPost(values.title, values.body)
                        .then(post => {
                            let postList = store.get("posts")

                            let serializedPost = serializePosts(post, postList)

                            postList.push(serializedPost)
                            store.set("posts", postList)
                        })
                        .then( () => {
                            history.push("/home")
                        })
                }}
            >
                {({values, handleSubmit, handleChange, errors}) => 
                    <Form autoComplete="off" className="create-form" noValidate onSubmit={handleSubmit}>
                        <Form.Group className="create-form-group" controlId="formBasicTitle">
                            <Form.Label className="create-form-text">Title</Form.Label>
                            <Form.Control 
                                placeholder="What are you going to talk about?" 
                                name="title"
                                values={values.title}
                                onChange={handleChange}
                                isInvalid={!!errors.title}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.title}
                            </Form.Control.Feedback>
                        </Form.Group>

                        <Form.Group className="create-form-group" controlId="formBasicBody">
                            <Form.Label className="create-form-text">Post Content</Form.Label>
                            <Form.Control 
                                as="textarea"
                                rows={10}
                                type="body" 
                                placeholder="What happened? What are you thinking? Say as much as you want!" 
                                name="body"
                                values={values.body}
                                onChange={handleChange}
                                isInvalid={!!errors.body}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.body}
                            </Form.Control.Feedback>
                        </Form.Group>
                        <Button className="create-post-button" variant="primary" type="submit">
                            Create...
                        </Button>
                    </Form>
                }
            </Formik>
        </div>
    )
}