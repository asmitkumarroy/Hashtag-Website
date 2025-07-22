import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import './SinglePost.css'; // We will update this file

const SinglePost = () => {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          _id,
          slug,
          mainImage{
            asset->{
              _id,
              url
            }
          },
          body,
          "authorName": author->name,
          "authorImage": author->image.asset->url,
          "authorBio": author->bio
        }`
      )
      .then((data) => {
        if (data && data.length > 0) {
          setPost(data[0]);
        } else {
          setError("Post not found.");
        }
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load post. Please try again later.");
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <div className="single-post-loading">Loading...</div>;
  }

  if (error || !post) {
    return <div className="single-post-error">{error || 'Post not found.'}</div>;
  }

  return (
    <main className="single-post-page">
      <article className="single-post-container">
        <header className="single-post-header">
          <h1 className="single-post-title">{post.title}</h1>
          {post.authorName && (
            <div className="author-info">
              <div className="author-hover-container">
                {post.authorImage && (
                  <img
                    src={post.authorImage}
                    alt={post.authorName}
                    className="author-image"
                  />
                )}
                <p className="author-name">By {post.authorName}</p>
                {post.authorBio && (
                  <div className="author-bio-popup">
                    <h3>About {post.authorName}</h3>
                    <BlockContent
                      blocks={post.authorBio}
                      projectId={sanityClient.config().projectId}
                      dataset={sanityClient.config().dataset}
                    />
                  </div>
                )}
              </div>
            </div>
          )}
        </header>
        
        {post.mainImage && (
          <div className="single-post-hero-image-container">
            <img
              className="single-post-hero-image"
              src={post.mainImage.asset.url}
              alt={post.title}
            />
          </div>
        )}

        <div className="single-post-content-wrapper">
            <div className="single-post-content">
                <BlockContent
                    blocks={post.body}
                    projectId={sanityClient.config().projectId}
                    dataset={sanityClient.config().dataset}
                />
            </div>
        </div>

      </article>
    </main>
  );
};

export default SinglePost;
