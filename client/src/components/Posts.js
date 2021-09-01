import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

import Comment from './Comment'

function Post (props){
    const [comments, setComments] = useState([])
    const { title, contents, created_at, updated_at, id } = props.post
    const {posts, setPosts} = props

    useEffect(() => {
        axios.get(`http://localhost:5000/api/posts/${id}/comments`)
            .then(res => setComments(res.data))
            .catch(err => console.log(err))
    })

    function linkString (){
        return `/edit/${id}`
    }

    function handleDelete(e){
        axios.delete(`http://localhost:5000/api/posts/${id}`)
            .then(res => setPosts(posts.filter(item => item.id !== res.data.id)))
            .catch(err => console.log(err))
    }

    return <div className='post'>
        <h3>{title}</h3>
        <p>{contents}</p>
        <p className='sub'>{created_at}</p>
        <p className='sub'>{updated_at}</p>
        <button onClick={handleDelete}>Delete</button>
        <Link to={linkString}><button>Edit</button></Link>
        <div className='comments'>
            {comments.map(comment => <Comment comment={comment} key={comment.id} comments={comments} setComments={setComments}/>)}
        </div>
    </div>
}

export default Post