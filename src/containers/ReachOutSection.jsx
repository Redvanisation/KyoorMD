import React from 'react';
import leapImg from '../img/img-kyoor-leap.svg';

const ReachOutSection = () => {
  return (
    <section className="section reach-out">
      <div className="reach-out__content">
        <h2 className="title is-2 is-bold">Reach Out</h2>
        <p className="reach-out__content--text">Feel free to send us a message, let us know how we can improve.</p>
        <button type="button" className="btn">Contact Us</button>
      </div>
      <img src={leapImg} alt="Vector" className="reach-out__img" />
    </section>
  );
};

export default ReachOutSection;
