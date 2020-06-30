import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import ReactHtmlParserfrom from 'react-html-parser';
import Layout from '../containers/Layout';
import { baseUrl, loaderCSS } from '../helpers';


const SinglePostPage = ({ match }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = match.params;


  useEffect(() => {
    const getPost = async () => {
      const response = await axios({
        method: 'get',
        url: `${baseUrl}posts/${id}`,
      });
      // console.log(response.data);
      setPost(response.data.post);
      setComments(response.data.comments);
      setIsLoading(false);
    };

    getPost();
  }, []);

  return (
    <Layout>
      <main>

        {
          !isLoading
            ? (
              <main className="single-article-page">
                <h2 className="title is-2 is-centered">{post.title}</h2>
                <div className="mt-3 mb-2">{ReactHtmlParserfrom(post.content)}</div>

                <hr />
                <h3 className="title is-3">Comments</h3>
                <div>{console.log(comments)}</div>
              </main>
            )
            : (
              <DotLoader size={60} color="#54C0AB" css={loaderCSS} loading={isLoading} />
            )
        }
      </main>
    </Layout>
  );
};

SinglePostPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default SinglePostPage;
