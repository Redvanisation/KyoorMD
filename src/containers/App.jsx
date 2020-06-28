import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ScreenerPage from '../pages/ScreenerPage';
import NavColorProvider from '../providers/NavColorProvider';
import ComingSoon from '../pages/ComingSoon';
import Login from '../pages/Login';
// import Signup from '../pages/Signup';
import BlogPage from '../pages/BlogPage';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <NavColorProvider>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/screener-covid19" component={ScreenerPage} />
          <Route exact path="/screener-feeling" component={ScreenerPage} />
          <Route exact path="/screener-wellness" component={ScreenerPage} />
          <Route exact path="/coming-soon" component={ComingSoon} />
          <Route exact path="/blog" component={BlogPage} />
          <Route exact path="/auth" component={Login} />
          {/* <Route exact path="/register" component={ComingSoon} /> */}
        </NavColorProvider>
        {/* <Route exact path="/" render={(props) => <HomePage {...props} navColor={navColor} setNavColor={setNavColor} />} />

        <Route exact path="/screener" render={(props) => <ScreenerPage {...props} navColor={navColor} setNavColor={setNavColor} />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
