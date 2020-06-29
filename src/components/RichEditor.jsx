import React, { useState, useContext, useEffect } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ReactHtmlParserfrom from 'react-html-parser';
import axios from 'axios';
import { baseUrl } from '../helpers';
import { UserContext } from '../providers/UserProvider';


const MyEditor = () => {
  const userCtx = useContext(UserContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const [loading, setLoading] = useState(true);
  const [art, setArt] = useState(null);

  const handleContentChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  const submitArticle = () => {
    if (content.length && userCtx.cookies.user) {
      axios({
        method: 'post',
        url: `${baseUrl}posts`,
        data: {
          title,
          content,
          user_id: userCtx.cookies.user.id
        }
      })
        .then(res => {
          if (res.status === 200 || res.status === 201) {
            console.log(res.data);
          }
        })
        .catch(() => alert('There has been an error saving the article!'));
    }
  }

  useEffect(() => {
    const getArticle = async () => {
      const res = await axios({
        method: 'get',
        url: `${baseUrl}posts/5`
      })
      
      setArt(res.data.post);
      setLoading(false);
    }

    getArticle();
  }, [])

  return (
    <>
      <h2>Article Editor</h2>
            <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <CKEditor
        editor={ClassicEditor}
        onChange={handleContentChange}
      />
      <button className="button" type="button" onClick={() => submitArticle(content)}>Save!</button>
      <div>
        {!loading
          ? (
            <>
              {art.title}
              {ReactHtmlParserfrom(art.content)}
            </>
          )
          : null}
      </div>
    </>
  );
};

export default MyEditor;
