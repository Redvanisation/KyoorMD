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
    <Layout>
      <main className="blog">
        <h2 className="title is-2 is-centered">Blog Page</h2>
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
  );
};

export default BlogPage;
