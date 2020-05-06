import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ScreenerPage from './pages/ScreenerPage';
import NavColorProvider from './containers/providers/NavColorProvider';

const App = () => {

  return (
    <BrowserRouter>
      <Switch>
        <NavColorProvider>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/screener" component={ScreenerPage} />
        </NavColorProvider>
        {/* <Route exact path="/" render={(props) => <HomePage {...props} navColor={navColor} setNavColor={setNavColor} />} />

        <Route exact path="/screener" render={(props) => <ScreenerPage {...props} navColor={navColor} setNavColor={setNavColor} />} /> */}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
