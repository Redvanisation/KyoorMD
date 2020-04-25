import React from 'react';

const Hero = () => {
  return (
    <section className="hero">
      {/* <div className="hero__btn-div">
        <button type="button" className="btn hero__btn-div--btn">
          English
          <i className="hero__btn-div--icon"><img src="./icons8-usa.svg" alt="usa flag" className="hero__btn-div--icon-img" /></i>
        </button>
      </div> */}

      <div className="columns is-desktop">
        <div className="column is-half hero__content">
          <h2 className="title is-2 is-bold hero__content--title">Prevention is the best form of a cure</h2>
          <p className="hero__content--p">Get access to the tools you need to let someone know how you are feeling and halt any bad diseases.</p>
          <button type="button" className="btn">Get Started</button>
        </div>

        <div className="column is-half hero__content--div-img" />
      </div>
    </section>
  );
};

export default Hero;
