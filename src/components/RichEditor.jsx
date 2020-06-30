import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';


const MyEditor = ({ setContent }) => {
  const handleContentChange = (e, editor) => {
    const data = editor.getData();
    setContent(data);
  };

  return (
    <CKEditor
      editor={ClassicEditor}
      onChange={handleContentChange}
    />
  );
};

MyEditor.propTypes = {
  setContent: PropTypes.instanceOf(Function).isRequired,
};

export default MyEditor;
