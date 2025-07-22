
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import sanityClient from '../client.js';
import BlockContent from '@sanity/block-content-to-react';
import imageUrlBuilder from '@sanity/image-url';
import './SinglePost.css';

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [post, setPost] = useState(null);
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
          "authorImage": author->image,
          "authorBio": author->bio
        }`
      )
      .then((data) => setPost(data[0]))
      .catch(console.error);
  }, [slug]);

  if (!post) return <div>Loading...</div>;

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
