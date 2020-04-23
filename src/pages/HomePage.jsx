import React from 'react';
import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import ProductsSection from '../containers/ProductsSection';
import BlogSection from '../containers/BlogSection';
import ReachOutSection from '../containers/ReachOutSection';

const HomePage = () => {
  return (
    <Layout>
      <>
        <Hero />
        <ProductsSection />
        <BlogSection />
        <ReachOutSection />
      </>
    </Layout>
  );
};

export default HomePage;
