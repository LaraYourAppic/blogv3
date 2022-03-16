import './BlogPost.css';
import React from 'react';
import posts from '../data/posts.json';
import {useParams} from "react-router-dom";

const BlogPost = () => {

    const {id} = useParams();

    const check = posts.find(post=>{
        return post.id === id
    })

    return (
        <article>
            <h1 className="title">Titel: {check.title}</h1>
            <h4 className="date">Datum: {check.date}</h4>
            <h3 className="content">{check.content}</h3>
        </article>
    );
};

export default BlogPost;