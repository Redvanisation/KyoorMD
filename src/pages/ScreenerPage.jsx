import React, { useLayoutEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Layout from '../containers/Layout';
import { NavColorContext } from '../providers/NavColorProvider';
import CovidScreener from '../containers/CovidScreener';

const ScreenerPage = ({ match }) => {
  const navCtx = useContext(NavColorContext);

  useLayoutEffect(() => {
    if (match.path.includes('screener')) {
      navCtx.setNavColor('screener');
    }

    return (
      () => navCtx.setNavColor('home')
    );
  }, [match.path, navCtx]);

  const selectScreenerDisplay = () => {
    if (match.path.includes('covid19')) {
      return <CovidScreener />;
    }
    // else if (match.path.includes('feeling')) {
    //   return 'FEEEELING!';
    // } else if (match.path.includes('wellness')) {
    //   return 'WELLNEEEEES!';
    // };
  };

  return (
    <Layout>
      <>
        {selectScreenerDisplay()}
      </>
    </Layout>
  );
};

ScreenerPage.propTypes = {
  match: PropTypes.instanceOf(Object).isRequired,
};

export default ScreenerPage;
