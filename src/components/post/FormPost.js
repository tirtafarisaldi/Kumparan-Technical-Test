import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
<<<<<<< HEAD:src/components/Posts/FormPost.js
import { CreatePost } from '../../redux/actions/post/CreatePost';
import { EditPost } from '../../redux/actions/post/EditPost';
=======
import { CreatePost } from '../redux/actions/CreatePost';
import { EditPost } from '../redux/actions/EditPost';
>>>>>>> parent of d125edf (Folder Restructure):src/components/FormPost.js
import { Link, useParams, useHistory } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'

const FormPost = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [id, setId] = useState('')

    const params = useParams();
    const dispatch = useDispatch();

    const { DetailPostResult } = useSelector(state => state.Post)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (id) {
            dispatch(EditPost({ id: id, title: title, body: body, userId: parseInt(`${params.userid}`) }))

        } else {
            dispatch(CreatePost(params.userid, { userId: parseInt(`${params.userid}`), title: title, body: body }))
        }
    }

    useEffect(() => {
        if (DetailPostResult) {
            setTitle(DetailPostResult.title)
            setBody(DetailPostResult.body)
            setId(DetailPostResult.id)
        }
    }, [DetailPostResult])

    return (
        <div>
            <h4>Add and Edit Your Post Here!</h4>
            <br />
            <Form onSubmit={(e) => handleSubmit(e)} >
                <Form.Label>Title Post</Form.Label>
                <br />
                <Form.Control type="text" name="title" placeholder="masukkan title..." value={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <br />
                <Form.Label>Body Post</Form.Label>
                <br />
                <Form.Control type="text" name="body" placeholder="masukkan body..." value={body}
                    onChange={(e) => setBody(e.target.value)} />
                <br />
                <Button  variant="outline-primary" type="submit">Submit</Button>
            </Form>
        </div>
    )
}

export { FormPost }