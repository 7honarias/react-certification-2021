import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import AuthProvider from '../../providers/Auth';
import HomePage from '../../pages/Home';
import LoginPage from '../../pages/Login';
import FavoritesPage from '../../pages/Favorites';
import NotFound from '../../pages/NotFound';
import ViewPage from '../../pages/View';
import LeftNav from '../LeftNav/LeftNav';
import AppProvider from '../../providers/App';
import Layout from '../Layout';

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <AppProvider>
          <Layout>
            <LeftNav></LeftNav>
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/login">
                <LoginPage />
              </Route>
              <Route exact path="/view/:videoId">
                <ViewPage />
              </Route>
              <Route exact path="/favorites">
                <FavoritesPage />
              </Route>
              <Route path="*">
                <NotFound />
              </Route>
            </Switch>
          </Layout>
        </AppProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
