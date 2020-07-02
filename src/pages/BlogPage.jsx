import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import Layout from '../containers/Layout';
import { baseUrl, loaderCSS } from '../helpers';
import Post from '../components/Post';

const BlogPage = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getPosts = async () => {
      const response = await axios({
        method: 'get',
        url: `${baseUrl}posts`,
      });

      setPosts(response.data);
      setIsLoading(false);
    };

    getPosts();
  }, []);

  return (
    <section className="blogPage">
      <div className="blog__search">
        <p>Categories</p>
        <p>Search</p>
      </div>
      <div className="blog columns is-desktop">
        <div className="column is-half blog__content--div-img" />
        <div className="column is-half blog__content">
          <h2 className="title is-2 is-bold blog__content--title">Know More About Your Body And What&rsquo;s Happening Around It</h2>
          <p className="blog__content--p is-subtitle">Read up on health and wellness articles to help you gather information on questions you want answers to. From a community that wants to help you.</p>
        </div>
      </div>
      <div className="blog__categories">
        <h3 className="title is-3 is-centered">Article Categories</h3>
        <button type="submit" className="button is-outlined">Outlined</button>
      </div>
      <Layout>
        <main className="blog__layout">
          <h2 className="title is-centered">Blog Page</h2>
          {
          !isLoading
            ? (
              <section className="blog__list">
                {posts.map((post) => <Post key={post.id} post={post} />)}
              </section>
            )
            : (
              <DotLoader size={60} color="#54C0AB" css={loaderCSS} loading={isLoading} />
            )
        }
        </main>
      </Layout>
    </section>
  );
};

export default BlogPage;
