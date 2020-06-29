import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../containers/Layout';
import { baseUrl } from '../helpers';
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
              <h3>LOADING...</h3>
            )
        }
      </main>
    </Layout>
  );
};

export default BlogPage;
