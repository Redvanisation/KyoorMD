import React, { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import { NavColorContext } from '../containers/providers/NavColorProvider';

const ScreenerPage = ({ match }) => {
  const navCtx = useContext(NavColorContext);

  useLayoutEffect(() => {
    if (match.path.includes('screener')) {
      navCtx.setNavColor('screener');
    }

    return (
      () => navCtx.setNavColor('home')
    );
  }, []);

  // console.log('Screener color: ', navCtx.navColor);

  return (
    <Layout>
      <>
        Screener Page
      </>
    </Layout>
  );
};

ScreenerPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ScreenerPage;
