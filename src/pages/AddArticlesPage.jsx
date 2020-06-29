import React, { useState, useContext, useLayoutEffect } from 'react';
import axios from 'axios';
import ReactHtmlParserfrom from 'react-html-parser';
import { useHistory } from 'react-router-dom';
import Layout from '../containers/Layout';
import RichEditor from '../components/RichEditor';
import { baseUrl } from '../helpers';
import { UserContext } from '../providers/UserProvider';


const AddArticlesPage = () => {
  const userCtx = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const history = useHistory();


  useLayoutEffect(() => {
    if (!userCtx.cookies.user || userCtx.cookies.user.blogger) {
      history.push('/');
    }
  });

  const submitArticle = () => {
    if (content.length && userCtx.cookies.user) {
      axios({
        method: 'post',
        url: `${baseUrl}posts`,
        data: {
          title,
          content,
          user_id: userCtx.cookies.user.id,
        },
      })
        .then((res) => {
          if (res.status === 200 || res.status === 201) {
            console.log(res.data);
          }
        })
        .catch(() => alert('There has been an error saving the article!'));
    }
  };

  return (
    <Layout>
      <main className="add-article">
        <h2 className="title is-3 is-centered">Create an Article</h2>
        <input className="input mt-2 mb-2" type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />

        <RichEditor setContent={setContent} />

        <button className="button mt-2" type="button" onClick={() => submitArticle(content)}>Save!</button>
        <div>
          {ReactHtmlParserfrom(content)}
        </div>
      </main>
    </Layout>
  );
};

export default AddArticlesPage;
