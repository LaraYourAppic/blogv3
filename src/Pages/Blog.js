import './Blog.css';
import React from 'react';
import posts from '../data/posts.json';
import {Link} from "react-router-dom";
import './Blog.css';


const Blog = () => {
    return (
        <section>
            <h1>Blog Overzicht</h1>
            <h3> Er staan {posts.length} onleesbare blogs op u te wachten!</h3>
            <ul className='PostOverview'>
                {posts.map((post)=>{
                    return <li key={post.id}><Link to={`/blog/${post.id}`}>{post.title}</Link></li>
                    }
                )}
            </ul>


        </section>
    );
};

export default Blog;