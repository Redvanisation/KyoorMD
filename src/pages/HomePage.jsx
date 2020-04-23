import React from 'react';
import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import ProductsSection from '../containers/ProductsSection';
import BlogSection from '../containers/BlogSection';

const HomePage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <ProductsSection />
        <BlogSection />
      </>
    </Layout>
  );
};

export default HomePage;
