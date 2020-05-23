import React from 'react';

const BlogSection = () => {
  return (
    <section className="blog-section">
      <div className="columns is-desktop blog-section__container">
        <div className="column is-half blog-section__container--img-div" />

        <div className="column blog-section__container--content">
          <h3 className="title is-3 is-bold">We want to help you further</h3>
          <p>
            We write up blogs so you can get helpful information during these hard times.
            Learn how others are tackling the pandemic.
            <wbr />
            &nbsp;Check it out!
          </p>
          <button type="button" className="btn ">Go To Blog</button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
