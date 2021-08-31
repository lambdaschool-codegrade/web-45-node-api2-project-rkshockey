import React, {useState, useEffect} from 'react'
import axios from 'axios'

function Home (){
    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://localhost:5000/api/posts')
            .then(res => setPosts(res.data))
            .catch(err => console.log(err))
    }, [])

    console.log(posts)

    return <div className='posts'>
        {/* {posts.map(post => <Post />)} */}
    </div>
}

export default Home