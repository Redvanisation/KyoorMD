import React from 'react';
import Layout from '../containers/Layout';
import Hero from '../components/Hero';
import BlogSection from '../containers/homePageContainers/BlogSection';
import ReachOutSection from '../containers/homePageContainers/ReachOutSection';
import Footer from '../components/Footer';
import ProductsSection from '../containers/homePageContainers/ProductsSection';
// import { NavColorContext } from '../containers/providers/NavColorProvider';

const HomePage = () => {

  return (
    <Layout>
      <Hero />
      <ProductsSection />
      <BlogSection />
      <ReachOutSection />
      <Footer />
    </Layout>
  );
};

export default HomePage;
