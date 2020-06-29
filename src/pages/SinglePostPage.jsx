import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import ReactHtmlParserfrom from 'react-html-parser';
import Layout from '../containers/Layout';
import { baseUrl, loaderCSS } from '../helpers';
import RichEditor from '../components/RichEditor';

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
              <>
              {ReactHtmlParserfrom(post.content)}
              {/* <RichEditor /> */}
                {/* <h2 className="title is-2 is-centered">
                  Title:
                  {post.title}
                </h2>
                <div>
                  Content:
                  {' '}
                  {post.content}
                </div>
                <h3 className="title is-3 is-centered">Comments</h3>
                <div>
                  {comments.map((comment) => (
                    <div key={comment.id}>
                      <p>
                        Comment:
                        {comment.body}
                      </p>
                      <p>
                        Date:
                        {comment.comment_created}
                      </p>
                      <p>
                        User:
                        {comment.username}
                      </p>
                      <p>
                        User email:
                        {comment.email}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  tags: {post.tags}
                </div> */}
              </>
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
