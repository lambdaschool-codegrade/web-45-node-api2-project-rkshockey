import React from 'react'

function Comment (props){
    const { id, text, created_at, updated_at } = props.comment
    const {comments, setComments} = props

    return <div className='comment'>
        <p>{text}</p>
        <p className='sub'>{created_at}</p>
        <p className='sub'>{updated_at}</p>
    </div>
}

export default Comment