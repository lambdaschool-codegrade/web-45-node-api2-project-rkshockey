import React, {useState, useEffect} from 'react'
import axios from 'axios'

import Post from './Posts'

function Home (){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])

    return <div className='posts'>
        {posts.map(post => <Post post={post} key={post.id} setPosts={setPosts} posts={posts}/>)}
    </div>
}

export default Home