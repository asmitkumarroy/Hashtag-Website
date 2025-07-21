import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import './Blogs.css';

const Blogs = () => {
  // Add state for loading and error
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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
      .then((data) => {
        setPosts(data);
        setIsLoading(false); // Set loading to false on success
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load posts. Please try again later."); // Set error message
        setIsLoading(false); // Also set loading to false on error
      });
  }, []);

  // Updated conditional rendering
  if (isLoading) {
    return <div className="blog-loading">Loading Posts...</div>;
  }

  if (error) {
    return <div className="blog-error">{error}</div>; // Display the error to the user
  }

  if (!posts || posts.length === 0) {
    return (
      <div className="new-page-container blogs-page">
        <h1 className="new-page-main-title">Our Blog</h1>
        <p className="page-subtitle">No posts found. Check back soon!</p>
      </div>
    );
  }

  return (
    <div className="new-page-container blogs-page">
      <h1 className="new-page-main-title">Our Blog</h1>
      <p className="page-subtitle">Thoughts, Tutorials, and Updates from the Hashtag Team.</p>
      <div className="blog-grid">
        {posts.map((post) => (
          <Link to={`/blogs/${post.slug.current}`} key={post.slug.current} className="blog-card-link">
            <article className="blog-card">
              <span className="blog-card-image-container">
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