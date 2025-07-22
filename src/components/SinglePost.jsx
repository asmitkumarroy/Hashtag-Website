
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './SinglePost.css';

const builder = imageUrlBuilder({
  projectId: '4czbk8j7',
  dataset: 'production',
});
function urlFor(source) {
  return builder.image(source);
}

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
          "authorImage": author->image{
            asset->{
              _id,
              url
            }
          },
          "authorBio": author->bio
        }`
      )
      .then((data) => {
        setPost(data[0]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load post. Please try again later.");
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!post) {
    return <div>Post not found.</div>;
  }

  return (
    <main className="single-post-page">
      <article className="single-post-container">
        <header className="single-post-header">
          <h1 className="single-post-title">{post.title}</h1>
          <div className="author-info">
            {post.authorImage && (
              <div className="author-hover-container">
                <img
                  src={urlFor(post.authorImage).url()}
                  alt={post.authorName}
                  className="author-image"
                />
                <p className="author-name">By {post.authorName}</p>
                {post.authorBio && (
                  <div className="author-bio-popup">
                    <h3>About {post.authorName}</h3>
                    <BlockContent
                      blocks={post.authorBio}
                      projectId="4czbk8j7"
                      dataset="production"
                    />
                  </div>
                )}
              </div>
            )}
          </div>
        </header>
        {post.mainImage && (
          <img
            className="single-post-hero-image"
            src={post.mainImage.asset.url}
            alt={post.title}
          />
        )}
        <div className="single-post-content">
          <BlockContent
            blocks={post.body}
            projectId="4czbk8j7"
            dataset="production"
          />
        </div>
      </article>
    </main>
  );
};

export default SinglePost;
