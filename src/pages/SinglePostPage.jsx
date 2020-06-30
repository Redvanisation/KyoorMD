/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { DotLoader } from 'react-spinners';
import ReactHtmlParserfrom from 'react-html-parser';
import Layout from '../containers/Layout';
import Comment from '../components/Comment';
import RichEditor from '../components/RichEditor';
import { baseUrl, loaderCSS } from '../helpers';
import { UserContext } from '../providers/UserProvider';


const SinglePostPage = ({ match }) => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState({});
  const [content, setContent] = useState(''); // Comment content state for the Rich Editor
  const [isLoading, setIsLoading] = useState(true);
  const { id } = match.params;
  const userCtx = useContext(UserContext);


  useEffect(() => {
    const getPost = async () => {
      const response = await axios({
        method: 'get',
        url: `${baseUrl}posts/${id}`,
      });
      setPost(response.data.post);
      setComments(response.data.comments);
      setIsLoading(false);
    };

    getPost();
  }, []);

  const handleCommentSubmit = (e) => {
    e.preventDefault();

    if (userCtx.cookies.user) {
      axios({
        method: 'post',
        url: `${baseUrl}comments/new`,
        data: {
          post_id: id,
          user_id: userCtx.cookies.user.id,
          body: content,
        },
      })
        .then((res) => {
          if (res.status === 200) {
            alert('Commented successfully');
            setComments(res.data.comments);
          }
        })
        .catch(() => alert('Error commenting!'));
    }
  };

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
                <div>
                  {
                    comments.map((comment, i) => <Comment key={i} comment={comment} />)
                  }
                  {console.log(comments)}
                </div>

                {
                  userCtx.cookies.user
                    ? (
                      <form className="mt-3" onSubmit={handleCommentSubmit}>
                        <h3 className="title is-3">Add a comment</h3>
                        <RichEditor setContent={setContent} />
                        <button className="button mt-2" type="submit">Comment!</button>
                      </form>
                    )
                    : null
                }
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
