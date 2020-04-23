import React from 'react';
import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import ProductsSection from '../containers/ProductsSection';

const HomePage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <ProductsSection />
      </>
    </Layout>
  );
};

export default HomePage;
