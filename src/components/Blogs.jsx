import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import './Blogs.css';

const Blogs = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
          title,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          }
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  if (!posts) {
    return <div className="blog-loading">Loading Posts...</div>;
  }

  return (
    <div className="new-page-container blogs-page">
      <h1 className="new-page-main-title">Our Blog</h1>
      <p className="page-subtitle">Thoughts, Tutorials, and Updates from the Hashtag Team.</p>
      <div className="blog-grid">
        {posts &&
          posts.map((post) => (
            <Link to={`/blogs/${post.slug.current}`} key={post.slug.current} className="blog-card-link">
              <article className="blog-card">
                <span className="blog-card-image-container">
                  {/* THE FIX: 
                    We check if 'post.mainImage' exists before trying to render the img tag.
                    The '?' is called optional chaining. It safely accesses nested properties.
                    If mainImage or its asset is missing, it simply does nothing instead of crashing.
                  */}
                  {post.mainImage?.asset?.url && (
                    <img
                      src={post.mainImage.asset.url}
                      alt={post.title}
                      className="blog-card-image"
                    />
                  )}
                </span>
                <span className="blog-card-content">
                  <h3 className="blog-card-title">{post.title}</h3>
                </span>
              </article>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
