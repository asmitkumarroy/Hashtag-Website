import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../client.js';
import './Blogs.css';

const formatAsFileName = (dateString, slug) => {
  if (!dateString || !slug) return 'untitled.post';
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}-${slug}.html`;
};

const BlogPostCard = ({ post }) => {
  const fileName = formatAsFileName(post._createdAt, post.slug.current);

  return (
    <Link to={`/blogs/${post.slug.current}`} className="blog-card-link">
      <article className="blog-card">
        {/* Card Header with window controls */}
        <div className="card-header">
          <div className="window-dots">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="file-name">{fileName}</div>
        </div>

        {/* Card Image */}
        <div className="card-image-container">
          {post.mainImage?.asset?.url && (
            <img
              src={post.mainImage.asset.url}
              alt={post.title}
              className="card-image"
            />
          )}
        </div>

        {/* Card Body with title, excerpt, and button */}
        <div className="card-body">
          <div className="card-content">
            <h3 className="card-title">{post.title}</h3>
            {post.excerpt && <p className="card-excerpt">{post.excerpt}</p>}
          </div>
          <span className="card-button">Read more...</span>
        </div>
      </article>
    </Link>
  );
};

const Blogs = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"] | order(_createdAt desc) {
          title,
          slug,
          _createdAt,
          excerpt,
          mainImage{
            asset->{
              url
            }
          }
        }`
      )
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load posts.");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="blog-loading">Loading Posts...</div>;
  }

  if (error) {
    return <div className="blog-error">{error}</div>;
  }

  return (
    <div className="blogs-container">
      <h1 className="new-page-main-title">Our Blog</h1>
      <p className="page-subtitle">A collection of our thoughts and projects.</p>
      
      <div className="blog-grid">
        {posts && posts.length > 0 ? (
          posts.map((post) => (
            <BlogPostCard key={post.slug.current} post={post} />
          ))
        ) : (
          <p>No posts found.</p>
        )}
      </div>
    </div>
  );
};

export default Blogs;