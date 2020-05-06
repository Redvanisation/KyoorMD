import React from 'react';
import Card from '../../components/Card';
import nurseImg from '../../img/img-kyoor-nurse.svg';
import showSheetImg from '../../img/img-kyoor-showsheet.svg';
import sleepingImg from '../../img/img-kyoor-sleeping.svg';
import happyFace from '../../img/img-kyoor.svg';

const ProductsSection = () => {
  return (
    <section className="section products has-text-centered">
      <h2 className="title is-bold products__title">
        <span className="products__title--part">The tools you need to get you</span>
        <span className="products__title--part">the help you need!</span>
      </h2>

      <div className="columns is-desktop products__cards-container">
        <Card
          title1="COVID-19"
          title2="Screener"
          src={nurseImg}
          content="COVID-19 is a life threating disease so make sure you know what's happening with your body."
        />

        <Card
          title1="How am I"
          title2="Feeling Sheet"
          src={showSheetImg}
          content="Going to visit a hospital or clinic? Make the admission process easier by having a sheet tell them how you're feeling."
        />

        <Card
          title1="My Wellness"
          title2="and Me"
          src={sleepingImg}
          content="Many of us are feeling anxious and uncertain. Tell us how you are doing, whether you are at home or working we want to help you!"
        />
      </div>

      <div className="products__bottom-part">
        <img src={happyFace} alt="vector" className="products__bottom-part--img" />
        <p className="products__bottom-part--text">
          We believe that communication shouldn&apos;t
          be an issue, so use our tools to get your point across.
        </p>
      </div>

    </section>
  );
};

export default ProductsSection;
